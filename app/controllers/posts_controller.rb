class PostsController < ApplicationController
	def index
		@posts = Post.all
		render 'home/projects.js.erb'
	end

	def show
		@post = Post.find(params[:id])
		render 'load_data.js.erb', locals: {post: @post, action: "show"}
	end

	def new
		@post = Post.new
		render 'load_data.js.erb', locals: {action: "new"}
	end
	
	def edit
		@post = Post.find(params[:id])
		render 'load_data.js.erb', locals: {post: @post, action: "edit"}
	end

	def create
		@post = Post.new(post_params)
		if @post.save
			update_table(true)
		else
			render 'load_data.js.erb', locals: {action: "new"}
		end
	end
	
	def update
		@post = Post.find(params[:id])

		if @post.update(post_params)
			update_table(true)
		else
			render 'load_data.js.erb', locals: {action: "edit"}
		end
	end

	def destroy
		@post = Post.find(params[:id])
		@post.destroy
		update_table(false)
	end

	private
		def post_params
			params.require(:post).permit(:title, :text)
		end

		def update_table(hide_input) # local vars autimatically passed to load_data.js
			@hide = hide_input
			@posts = Post.all
			render 'load_data.js.erb', locals: {action: "posts_list"}
		end
end
