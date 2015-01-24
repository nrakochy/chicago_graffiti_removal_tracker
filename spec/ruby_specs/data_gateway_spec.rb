require 'json'
require_relative 'spec_helper'

describe DataGateway do
  let(:sample_record){
    {
    "police_district" => "12",
    "zip_code" => "60608",
    "status" => "Open",
    "creation_date" => "2014-12-17T00:00:00",
    "ward" => "25",
    "longitude" => "-87.67355391908644",
    "community_area" => "31",
    "latitude" => "41.85282566369766",
    "street_address" => "2140 S WOLCOTT AVE"
  }
  }

  describe '#parse_single_record' do
    it 'ensures that the data record has zip code' do
      expect(sample_record["zip_code"]).to eq("60608")
    end

    it 'ensures that the data record has latitude/longitude' do
      expect(sample_record["latitude"]).to eq("41.85282566369766")
      expect(sample_record["longitude"]).to eq("-87.67355391908644")
    end

    it 'ensures that the data record has a creation_date' do
      expect(sample_record["creation_date"]).to eq("2014-12-17T00:00:00")
    end

    it 'ensures that the data record has a ward' do
      expect(sample_record["ward"]).to eq("25")
    end

    it 'ensures that the data record has a ward' do
      expect(sample_record["street_address"]).to eq("2140 S WOLCOTT AVE")
    end
  end

end
