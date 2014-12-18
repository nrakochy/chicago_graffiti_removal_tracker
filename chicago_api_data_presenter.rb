require 'net/http'
require 'json'
require 'uri'

class ChicagoApiDataPresenter

  CHICAGO_GRAFFITI_TRACKER_API = 'https://data.cityofchicago.org/resource/hec5-y4x5.json'

  def self.get_data
    response = nil
    uri = URI(CHICAGO_GRAFFITI_TRACKER_API)
    Net::HTTP.start(uri.host, uri.port, :use_ssl => uri.scheme == 'https') do |http|
      request = Net::HTTP::Get.new(uri)
      response = http.request(request)
    end
    JSON.parse(response.body)
  end
end
