# This class acts as a wrapper for the configuration files giving access to
# the different addresses for the gateways or websockets services.
# @author Vincent Courtois <courtois.vincent@outlook.com>
class Configuration
  include Singleton

  # @!attribute [rw] gateways
  #   @return [Array<String>] an array of gateways URL to make API requests.
  attr_accessor :gateways
  # @!attribute [rw] websockets
  #   @return [Array<String>] an array of websockets URL to subscribe to.
  attr_accessor :websockets

  def load!
    @gateways = load_config('gateways')
    @websockets = load_config('websockets')
  end

  def load_config(filename)
    filepath = File.join(File.dirname(File.expand_path(__FILE__)), '..', 'config', "#{filename}.yml")
    return YAML::load_file(filepath)[ENV['RACK_ENV']]
  end
end