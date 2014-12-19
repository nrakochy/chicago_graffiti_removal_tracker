require 'net/http'
require 'json'
require 'uri'

class ChicagoApiDataPresenter


  def self.get_data(external_api)
    response = nil
    uri = URI(external_api)
    Net::HTTP.start(uri.host, uri.port, :use_ssl => uri.scheme == 'https') do |http|
      request = Net::HTTP::Get.new(uri)
      response = http.request(request)
    end
    valid_response?(response) ? JSON.parse(response.body) : []
  end

  def self.valid_response?(http_response)
    http_response.code == '200'
  end
end
