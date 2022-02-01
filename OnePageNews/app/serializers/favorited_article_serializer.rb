class FavoritedArticleSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :article_id
end
