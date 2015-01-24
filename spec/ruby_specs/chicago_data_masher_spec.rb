require_relative 'spec_helper'
require 'time'

describe ChicagoDataMasher do
  describe '#find_open_requests_for_graffiti_removal' do
    it 'returns an array of Hash objects which have an Open Request status' do
      sample_data = [{'status'=> 'open', 'id' => 2}, {'status' => 'null', 'id' => 10}, {'status' => 'open', 'id' => 3} ]
      open_requests = ChicagoDataMasher.new(sample_data).find_open_requests_for_graffiti_removal
      expect(open_requests.count).to eq(2)
      expect(open_requests.class).to eq(Array)
      expect(open_requests.first.class).to eq(Hash)
    end
  end

  describe '#find_duration_since_request_was_made' do
    it 'adds a Hash Object with number of days since request for removal was opened' do
      sample_data = [{'status'=> 'open', 'id' => 2, "creation_date" => "2014-12-17T00:00:00"}]
      modified_data = ChicagoDataMasher.new(sample_data).find_duration_since_request_was_made(sample_data.first)
      expect(modified_data.has_key?("days_elapsed_since_request")).to eq(true)
    end
  end
end


