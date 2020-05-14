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

    Raven.configure do |config|
      config.dsn = 'https://706aef0537114293987cea76abcf4f8b:fb4ce5ab3eab474cadb918a75680ad00@o392721.ingest.sentry.io/5240771'
    end

    
    config.filter_parameters << :password

  end
end
