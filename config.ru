require 'bundler'
Bundler.require(ENV['RACK_ENV'].to_sym || :development)

require './server/controller.rb'
require './server/seeder.rb'

Mongoid.load!('./config/mongoid.yml')

Seeder.instance.create_init_application
Seeder.instance.create_init_rights

map('/') { run Controller.new }