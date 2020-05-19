require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module SeembaEsports
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.0

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.

    config.active_storage.content_types_to_serve_as_binary -= ['image/svg+xml']
    config.active_record.belongs_to_required_by_default = false

    Raven.configure do |config|
      config.dsn = 'https://1b7387b78426438882c38af2b7bd9048:b1879e72bb4d4bbc96f3a8536074c711@crash.seemba.com/9'
    end

    
    config.filter_parameters << :password

  end
end
