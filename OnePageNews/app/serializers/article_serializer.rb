class ArticleSerializer
  include FastJsonapi::ObjectSerializer
  attributes :is_top, :category, :title, :author, :news_org, :published, :description, :url, :image_url, :content, :users

end
