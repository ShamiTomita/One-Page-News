class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :zipcode, :lat, :lon
  

  def latlon
    zipcode.to_latlon
  end
end
