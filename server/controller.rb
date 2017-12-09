# This controller opens only two routes :
# - The first one serves the client-side application (packaged Javascript)
# - The second one forwards the 
class Controller < Sinatra::Base

  set :root, File.join(File.dirname(__FILE__), '..')
  set :public_folder, File.join(settings.root, 'client')
  set :views, settings.public_folder

  configure do
    use Rack::Session::Cookie, secret: ENV['SESSION_SECRET']
    use Rack::Csrf, raise: true
  end

  helpers do
    def csrf_tag; Rack::Csrf.tag(env); end
  end

  attr_reader :connection

  def initialize
    super
    @connection = Faraday.new(url: 'https://arkaan-gateway.herokuapp.com/') do |faraday|
      faraday.request  :url_encoded
      faraday.response :logger
      faraday.adapter  Faraday.default_adapter
    end
  end

  get '/' do
    erb :index
  end

  post '/api' do
    @body = parse_body
    @forwarded = connection.send(@body['method']) do |req|
      forward.url @body['url'], @body['data']
      forward.body = @body['body']
      forward.headers['Content-Type'] = 'application/json'
      forward.options.timeout = 5
      forward.options.open_timeout = 2
    end
    status @forwarded.status
    body @forwarded.body
  end

  private

  def parse_body
    body = JSON.parse(request.body.read.to_s) rescue {}
    if body['data'].nil?
      body['data'] = {'app_key' => ENV['APP_KEY']}
    else
      body['data']['app_key'] = ENV['APP_KEY']
    end
    return body
  end
end