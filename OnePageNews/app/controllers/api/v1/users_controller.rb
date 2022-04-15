class Api::V1::UsersController < ApplicationController
  def new
    @user = User.new
  end

end
