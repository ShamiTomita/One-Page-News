class User < ApplicationRecord
  has_many :favorited_articles, foreign_key:"user_id", class_name:"Article"
end
