require 'time'

SECONDS_IN_DAY = 86400.0

class ChicagoDataMasher

  def initialize(data)
    @data = data
  end

  def find_open_requests_with_days_since_request
    open_requests = find_open_requests_for_graffiti_removal
    iterate_data_set_for_time_lapsed_since_request(open_requests)
  end

  def find_open_requests_for_graffiti_removal
    @data.select{ |data_record| data_record["status"].upcase == 'OPEN'}
  end

  def iterate_data_set_for_time_lapsed_since_request(data_set)
    data_set.map{ |data_record| find_duration_since_request_was_made(data_record) }
  end

  def find_duration_since_request_was_made(data_record)
      request_date = Time.parse(data_record["creation_date"])
      time_elapsed_since_request = Time.now - request_date
      num_of_days = (time_elapsed_since_request/SECONDS_IN_DAY).to_i
      data_record["days_elapsed_since_request"] = num_of_days.to_s
      data_record
  end
end

