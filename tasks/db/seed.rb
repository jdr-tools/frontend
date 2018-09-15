namespace :db do
  task seed: ['db:account', 'db:application', 'db:rights'] do
  end

  task :account do
    account = Arkaan::Account.where(username: ENV['INIT_USERNAME']).first
    if account.nil?
      puts 'Creating the first account in the database'
      account = Arkaan::Account.create(
        username: ENV['INIT_USERNAME'],
        password: ENV['INIT_PASSWORD'],
        password_confirmation: ENV['INIT_PASSWORD'],
        email: ENV['INIT_EMAIL']
      )
      puts 'Creation successful' if account.persisted?
    end
  end

  task :application do
    application = Arkaan::OAuth::Application.where(key: ENV['INIT_APPKEY']).first
    if application.nil?
      puts 'Creating the first application in the database'
      application = Arkaan::OAuth::Application.create(
        key: ENV['INIT_APPKEY'],
        name: ENV['INIT_APPNAME'],
        premium: true,
        creator: Arkaan::Account.where(username: ENV['INIT_USERNAME']).first
      )
      puts 'Creation successful' if application.persisted?
    end
  end

  task :rights do
    puts 'Creating the first group for the application, being the admin one'
    account = Arkaan::Account.where(username: ENV['INIT_USERNAME']).first
    admin_group = Arkaan::Permissions::Group.find_or_create_by(slug: 'admin')
    admin_group.is_superuser = true
    if admin_group.accounts.where(_id: account.id).first.nil?
      puts 'Adding the first account to the superuser group'
      admin_group.accounts << account
    end
    if Arkaan::Monitoring::Route.count > 0
      puts 'Adding routes to the admin group'
      admin_group.routes = Arkaan::Monitoring::Route.all
    end
    admin_group.save
    puts 'Creation successful' if admin_group.persisted?
  end
end