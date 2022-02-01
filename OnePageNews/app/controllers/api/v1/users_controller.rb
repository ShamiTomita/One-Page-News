class Api::V1::UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    user = User.new(user_params)
    if !user.save
      render json: {:errors => user.errors.full_messages}
    else
      render json: article
    end
  end

  private
  def user_params
    params.require(:user).permit(:name, :zipcode)
  end


end
