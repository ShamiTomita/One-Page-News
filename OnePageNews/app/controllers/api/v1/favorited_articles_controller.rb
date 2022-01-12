class Api::V1::FavoritedArticlesController < ApplicationController
  def new
    favorited_article = FavoritedArticle.new
  end

  def create
    favorited_article = FavoritedArticle.new(favorited_article_params)
  end

  private
  def user_params
    params.require(:favorited_article).permit(:user_id, :article_id)
  end


end
