require_relative 'spec_helper'

CHICAGO_TEST_API = 'https://data.cityofchicago.org/'


context 'HTTPS METHODS' do
  describe '.get_data' do
    it 'sends a request to City of Chicago for data and returns JSON' do
      rendered_data = ChicagoApiDataPresenter.get_data(CHICAGO_TEST_API)
      expect(rendered_data.class).to eq(Array)
      expect(rendered_data.first.class).to eq(Hash)
      expect(rendered_data.first['zip_code']).to eq('60608')
    end
  end
end

