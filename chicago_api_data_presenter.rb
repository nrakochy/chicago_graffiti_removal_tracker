require 'net/http'
require 'json'
require 'uri'

class ChicagoApiDataPresenter


  def initialize(external_api)
    @external_api = external_api
  end

  def get_data
    response = nil
    uri = URI(@external_api)
    Net::HTTP.start(uri.host, uri.port, :use_ssl => uri.scheme == 'https') do |http|
      request = Net::HTTP::Get.new(uri)
      response = http.request(request)
    end
    JSON.parse(response.body)
  end
end
