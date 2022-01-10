class User < ApplicationRecord
  has_many :favorited_articles
  has_many :articles, through: :favorited_articles
end
