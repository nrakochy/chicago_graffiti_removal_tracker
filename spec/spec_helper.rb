require 'rspec'
require 'json'
require 'webmock/rspec'

require_relative './support/fake_chicago_sinatra_api'
require_relative '../app'
require_relative '../lib/chicago_api_data_presenter'
require_relative '../lib/chicago_data_masher'

CHICAGO_DATA_SITE_TEST = 'data.cityofchicago.org'
WebMock.disable_net_connect!(allow_localhost: true)

RSpec.configure do |config|
  config.before(:each) do
    stub_request(:get, /data.cityofchicago.org/).to_rack(FakeChicagoSinatraApi)
  end
end
