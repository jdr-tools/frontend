require 'bundler'
Bundler.require(ENV['RACK_ENV'].to_sym || :development)
require './server/controller.rb'

map('/') { run Controller.new }