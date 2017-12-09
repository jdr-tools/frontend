class Seeder
  include Singleton

  def create_init_account
    if Arkaan::Account.where(username: 'admin').first.nil?
      account = Arkaan::Account.new(
        username: ENV['INIT_USERNAME'],
        password: ENV['INIT_PASSWORD'],
        password_confirmation: ENV['INIT_PASSWORD'],
        email: ENV['INIT_EMAIL']
      )
      account.save! if account.valid?
    end
  end
end