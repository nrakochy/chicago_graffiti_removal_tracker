require_relative '../spec_helper'

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

  describe '.find_by_zip_code' do
    it 'returns array of Hash Objects which have a matching Zip Code attribute' do
      sample_data = [{'status'=> 'open', 'id' => 2, 'zip_code' => "60616"}, {'status' => 'null', 'id' => 10, 'zip_code' => "60616"}, {'status' => 'open', 'id' => 3} ]
      open_requests = ChicagoDataMasher.find_open_requests_for_graffiti_removal(sample_data)
      expect(open_requests.count).to eq(2)
      expect(open_requests.class).to eq(Array)
      expect(open_requests.first.class).to eq(Hash)
    end
  end
end


