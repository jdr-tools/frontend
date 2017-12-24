# This class is used to initialize the needed data for the application.
# @author Vincent Courtois <courtois.vincent@outlook.com>
class Seeder
  include Singleton

  # Creates the first account of the application, so that we can connect and manage it.
  # @return [Arkaan::Account] the first account of the application, with all rights given.
  def create_init_account
    account = Arkaan::Account.where(username: ENV['INIT_USERNAME']).first
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

  # Creates the application corresponding to the frontend.
  # @return [Arkaan::OAuth::Application] the application symbolizing the frontend.
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

  # Initializes the rights and the groups for the first user.
  # @todo Move this method to the service dedicated to groups and rights.
  def create_init_rights
    account = Arkaan::Account.where(username: ENV['INIT_USERNAME']).first
    admin_group = Arkaan::Permissions::Group.where(slug: 'admin').first
    if admin_group.nil?
      admin_group = Arkaan::Permissions::Group.new(slug: 'admin')
      admin_group.save! if admin_group.valid?
    end
    account_has_group = false
    account.groups.each do |group|
      account_has_group = true if group.slug == 'admin'
    end
    unless account_has_group
      account.groups << admin_group
      account.save! if account.valid?
    end
  end
end