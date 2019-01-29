class PostsController < ApplicationController
	def index
		@posts = Post.all
	end

	def show
		@post = Post.find(params[:id])
	end

	def new
	end

	def create
		@post = Post.new(post_params)
		@post.save
		render partial: 'show', locals: {post: @post}, remote:true
	end

	private
	  def post_params
	    params.require(:post).permit(:title, :text)
	  end
end
