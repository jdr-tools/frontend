lock '~> 3.11.0'

set :application, 'virtuatable-frontend'
set :deploy_to, '/var/www/frontend'
set :repo_url, 'git@github.com:jdr-tools/frontend.git'
set :branch, 'master'

append :linked_files, 'config/gateways.yml'
append :linked_files, 'config/websockets.yml'
append :linked_files, '.env'
append :linked_dirs, 'bundle'
append :linked_dirs, 'node_modules'
append :linked_dirs, 'log'