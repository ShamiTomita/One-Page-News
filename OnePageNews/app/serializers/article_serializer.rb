class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :news_org, :category, :published, :description
end
