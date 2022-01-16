class PostsController < ApplicationController

    def create  
        post = Post.create!(post_params)
        if post.valid?
            render json: post, status: :created
        end
    end

    def update
        @post.update!(update_post)
        render json:@post, status: :ok
    end

    def destroy
        @post.destroy
        render json:{},status: :ok
    end

    def show
        render json: @post
    end

    def increment_likes
        @current_user?
        render json: Post.increment(:total_likes, by = 1)
    end

    private

    def post_params
        Post.permit(:caption, :image, :user_id)
    end

    def update_post
        params.permit(:caption)
    end

   

end
