class Api::V1::FavoritedArticlesController < ApplicationController
  def index
    favorites = FavoritedArticle.all

    render json: FavoritedArticlesSerializer.new(favorites)
  end

  def new
    favorited_article = FavoritedArticle.new
  end

  def show
    fave = FavoritedArticle.find_by(id: params[:id])

    render json: FavoritedArticlesSerializer.new(fave)
  end

  def create
    fave = FavoritedArticle.create(favorited_article_params)
    render json: FavoritedArticlesSerializer.new(fave)
  end

  private
  def favorited_article_params
    params.permit(:user_id, :article_id)
  end


end
