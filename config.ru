require 'bundler'
Bundler.require(ENV['RACK_ENV'].to_sym || :development)

$stdout.sync = true

require './server/controller.rb'

Mongoid.load!('./config/mongoid.yml')

map('/') { run Controller.new }