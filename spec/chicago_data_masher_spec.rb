require 'spec_helper'

describe ChicagoDataMasher do
  describe '.find_open_requests_for_graffiti_removal' do
    it 'returns an array of Hash objects which have an Open Request status' do
      sample_data = [{'status'=> 'open', 'id' => 2}, {'status' => 'null', 'id' => 10}, {'status' => 'open', 'id' => 3} ]
      open_requests = ChicagoDataMasher.find_open_requests_for_graffiti_removal(sample_data)
      expect(open_requests.count).to eq(2)
      expect(open_requests.class).to eq(Array)
      expect(open_requests.first.class).to eq(Hash)
    end
  end
end


