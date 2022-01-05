class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :news_org, :category, :published, :user_id, :description
end
