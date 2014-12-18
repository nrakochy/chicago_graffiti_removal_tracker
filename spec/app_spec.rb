require 'spec_helper'
require 'app'

CHICAGO_TEST_API = 'https://data.cityofchicago.org/resource/hec5-y4x5.json'


context 'HTTPS REQUESTS' do
  describe 'GET' do
    it 'sends a request to City of Chicago for JSON data' do
      uri = URI(CHICAGO_TEST_API)
      request = nil
      response = JSON.load(request)
      expect(response.first['zip_code']).to eq('60608')
    end
  end
end

