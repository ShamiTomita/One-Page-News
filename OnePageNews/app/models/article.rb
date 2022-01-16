class Article < ApplicationRecord
  has_many :favorited_articles
  has_many :users, through: :favorited_articles
  validates :title, :author, :news_org, :content, :category, :published, :description, :url, :image_url, presence: true



end
