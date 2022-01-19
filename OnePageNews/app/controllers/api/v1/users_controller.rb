class Api::V1::UsersController < ApplicationController
  def new
    user = User.new
    render json: user.zipcode.latlon
  end

  def index
    users = User.all

    render json: users

  end

  def show
    user = User.find_by(id: params[:id])
    render json: user

  end

  def create
    @user = User.create(user_params)
    render json: @user
  end

  private
  def user_params
    params.permit(:name, :zipcode)
  end


end
