class Seeder
  include Singleton

  def create_init_account
    account = Arkaan::Account.where(username: 'admin').first
    if account.nil?
      account = Arkaan::Account.new(
        username: ENV['INIT_USERNAME'],
        password: ENV['INIT_PASSWORD'],
        password_confirmation: ENV['INIT_PASSWORD'],
        email: ENV['INIT_EMAIL']
      )
      account.save! if account.valid?
    end
    account
  end

  def create_init_application
    application = Arkaan::OAuth::Application.where(key: ENV['INIT_APPKEY']).first
    if application.nil?
      application = Arkaan::OAuth::Application.new(
        key: ENV['INIT_APPKEY'],
        name: ENV['INIT_APPNAME'],
        premium: true,
        creator: create_init_account
      )
      application.save! if application.valid?
    end
    application
  end
end