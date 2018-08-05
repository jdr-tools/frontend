require 'bundler'
Bundler.require(:development)

$stdout.sync = true

Mongoid.load!('./config/mongoid.yml')

require './tasks/db/seed'

task default: %[db:seed]