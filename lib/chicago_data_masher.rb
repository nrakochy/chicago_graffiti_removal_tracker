class ChicagoDataMasher

  def self.find_open_requests_for_graffiti_removal(data_set)
    open_requests = []
    data_set.each{|data_record| open_requests << data_record if data_record["status"].upcase.chomp == 'OPEN'}
    open_requests
  end

end
