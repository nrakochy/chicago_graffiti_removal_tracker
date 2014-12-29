class ChicagoDataMasher

  def self.find_open_requests_for_graffiti_removal(data_set)
    open_requests = []
    data_set.each{|data_record| open_requests << data_record if data_record["status"].upcase.chomp == 'OPEN'}
    open_requests
  end

  def self.filter_by_zip_code(location, open_graffiti_requests)
    matching_records = []
    open_graffiti_requests.each do |data_record|
      matching_records << data_record if data_record["zip_code"].chomp == location
    end
    matching_records
  end

end
