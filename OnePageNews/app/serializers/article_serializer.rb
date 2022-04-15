class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :news_org, :published, :description, :content, :url, :image_url
end
