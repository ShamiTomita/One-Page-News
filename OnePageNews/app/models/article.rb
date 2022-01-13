class Article < ApplicationRecord
  has_many :favorited_articles
  has_many :users, through: :favorited_articles


  
end
