class Api::V1::ArticlesController < ApplicationController
  def index
    articles = Article.all.order(created_at: :desc).with_attached_image
    
    render json: articles
  end

  def create
    article = Article.create!(article_params)

    if article
      render json: article
    else
      render json: article.errors
    end
  end

  def show
    if article
      render json: article
    else
      render json: article.errors
    end
  end

  def destroy
    article&.destroy
    render json: { message: 'Article deleted!' }
  end

  private

  def article_params
    params.permit(:title, :body, :image)
  end

  def article
    @article ||= Article.find(params[:id])
  end
end