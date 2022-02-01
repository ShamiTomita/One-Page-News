class Api::V1::ArticlesController < ApplicationController

  def index
    articles = Article.all
    render json: articles
  end

  def show
    article = Article.find_by(id: params[:id])
    render json: article
  end

  private
  def articles_params
    params.require(:article).permit(:name, :author, :news_org, :published, :description, :url, :image_url, :content)
  end
end
