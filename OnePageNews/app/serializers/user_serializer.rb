class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :zipcode

end
