class User < ApplicationRecord
  has_many :favorited_articles
  has_many :articles, through: :favorited_articles
  before_save :add_lat_lon


  def self.latlon
    zipcode.to_latlon
  end

  private
  def add_lat_lon
    self.lat = self.zipcode.to_lat
    self.lon = self.zipcode.to_lon
  end
end
