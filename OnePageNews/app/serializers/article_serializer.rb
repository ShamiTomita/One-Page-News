class ArticleSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :author, :news_org, :published, :description, :url, :image_url, :content, :users
  #has_many :favorited_articles
  #has_many :users, through: :favorited_articles
end
