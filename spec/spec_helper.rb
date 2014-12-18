require 'rspec'
require 'webmock/rspec'
require 'json'
require 'support/fake_chicago_api'

CHICAGO_DATA_SITE_TEST = 'data.cityofchicago.org'

RSpec.configure do |config|
  config.before(:each) do
    stub_request(:any, /.*CHICAGO_DATA_SITE_TEST*/).to_rack(FakeChicagoApi)
  end
end
