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
    @url = @body.delete('url')
    @verb = @body.delete('method').downcase || 'get'
    @forwarded = connection.send(@verb) do |forwarded_request|
      forwarded_request.url @url
      forwarded_request.body = @body
      forwarded_request.headers['Content-Type'] = 'application/json'
      forwarded_request.options.timeout = 5
      forwarded_request.options.open_timeout = 2
    end
    status @forwarded.status
    body @forwarded.body
  end

  private

  def parse_body
    body = JSON.parse(request.body.read.to_s) rescue {}
    body['app_key'] = ENV['INIT_APPKEY']
    return body
  end
end