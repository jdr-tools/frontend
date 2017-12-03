# This controller opens only two routes :
# - The first one serves the client-side application (packaged Javascript)
# - The second one forwards the 
class Controller < Sinatra::Base

  set :root, File.join(File.dirname(__FILE__), '..')
  set :public_folder, File.join(settings.root, 'client')
  set :public, File.join(settings.root, 'client')
  set :views, settings.public_folder

  puts settings.public_folder

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

  get '/api' do
    if params['data'].nil?
      params['data'] = {'app_key' => ENV['APP_KEY']}
    else
      params['data']['app_key'] = ENV['APP_KEY']
    end
    @forwarded = connection.send(params['method']) do |req|
      forward.url params['url'], params['data']
      forward.body = params['body']
      forward.headers['Content-Type'] = 'application/json'
      forward.options.timeout = 5
      forward.options.open_timeout = 2
    end
    status @forwarded.status
    body @forwarded.body
  end
end