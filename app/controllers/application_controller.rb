class ApplicationController < ActionController::API
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  before_action :authenticate_user 

  private

  def authenticate_user
    @current_user = User.find_by(id: session[:user_id])
    render json: { error: "Not authorized" }, status: :unauthorized unless 
    @current_user
  end

  def find_user
    @user = User.find(params[:id])
  end

  def find_post
    @post = Post.find(params[:id])
  end
  
  def find_picture
    @post
    @picture = rail_blob_path(post.picture)
  end
end
