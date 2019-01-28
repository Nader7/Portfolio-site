class HomeController < ApplicationController
  def show
  	render template: "home/#{params[:page]}"
  end
  def create
  	render plain: params[:article].inspect
  end
end
