require 'time'

SECONDS_IN_DAY = 86400.0

class ChicagoDataMasher

  def self.find_open_requests_with_days_since_request(data_set)
    open_requests = find_open_requests_for_graffiti_removal(data_set)
    find_duration_since_request_was_made(open_requests)
  end

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

  def self.find_duration_since_request_was_made(data_set)
    modified_set = data_set.map do |data_record|
      request_date = Time.parse(data_record['creation_date'])
      time_elapsed_since_request = Time.now - request_date
      num_of_days = (time_elapsed_since_request/SECONDS_IN_DAY).to_i
      data_record["days_elapsed_since_request"] = num_of_days.to_s
      data_record
    end
    modified_set
  end

end

