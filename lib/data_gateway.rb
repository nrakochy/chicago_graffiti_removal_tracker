class DataGateway

  def initialize(data)
    @data = data
  end

  def format_api_data
    @data.map{|data_record| parse_single_record(data_record) }
  end

  def parse_single_record(data_record)
    data_record
  end

end

