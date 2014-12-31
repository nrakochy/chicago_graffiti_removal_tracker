require_relative 'spec_helper'
require 'time'

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

  describe '.find_duration_since_request_was_made' do
    it 'adds a Hash Object with number of days since request for removal was opened' do
      sample_data = [{'status'=> 'open', 'id' => 2, "creation_date" => "2014-12-17T00:00:00"}]
      modified_data = ChicagoDataMasher.find_duration_since_request_was_made(sample_data)
      expect(modified_data.first.has_key?("days_elapsed_since_request")).to eq(true)
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


