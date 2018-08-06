# This controller opens only two routes :
# - The first one serves the client-side application (packaged Javascript)
# - The second one forwards the 
class Controller < Sinatra::Base

  set :root, File.join(File.dirname(__FILE__), '..')
  set :public_folder, settings.root
  set :views, settings.public_folder

  configure do
    use Rack::Session::Cookie, secret: ENV['SESSION_SECRET']
    use Rack::Csrf, raise: true
  end

  helpers do
    def csrf_tag; Rack::Csrf.tag(env); end
  end

  attr_accessor :connection

  before do
    if connection.nil?
      @connection = Faraday.new(Arkaan::Monitoring::Gateway.all.sample.url) do |faraday|
        faraday.request  :url_encoded
        faraday.response :logger
        faraday.adapter  Faraday.default_adapter
      end
    end
  end

  get '/' do
    erb :'client/index'
  end

  get '/admin' do
    erb :'admin/index'
  end

  get '/websocket' do
    halt 200, {url: Arkaan::Monitoring::Websocket.pluck(:url).sample}.to_json
  end

  post '/api' do
    @body = parse_body
    @url = @body.delete('url')
    @verb = @body.delete('method').downcase || 'get'
    @forwarded = connection.send(@verb) do |forwarded_request|
      if ['get', 'delete'].include? @verb
        forwarded_request.url @url, @body
      else
        forwarded_request.url @url
        forwarded_request.body = @body.to_json
      end
      forwarded_request.headers['Content-Type'] = 'application/json'
      forwarded_request.options.timeout = 20
      forwarded_request.options.open_timeout = 20
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