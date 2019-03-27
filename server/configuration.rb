class Configuration
  include Singleton

  attr_accessor :gateways

  attr_accessor :websockets

  def load!
    gateways = load_config('gateways')
    websockets = load_config('websockets')
  end

  def load_config(filename)
    filepath = File.join(File.dirname(File.expand_path(__FILE__)), "config/#{filename}.yml")
    return YAML::load_file(filepath)[ENV['RACK_ENV']]
  end
end