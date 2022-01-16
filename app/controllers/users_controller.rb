class UsersController < ApplicationController
    skip_before_action :authenticate_user, only: [:create,:index]

     def create
        user = User.create!(
          username: params[:username],
          email: params[:email],
          password: params[:password],
          password_confirmation: params[:password_confirmation])
       
        render json: user, status: :created
      end

      def index 
        user = User.all
        render json: user, status: :ok 
      end  

      def show 
        user = User.find_by(id: session[:user_id])
        if user 
          render json:user, status: :ok 
        else 
          render json: { error: "Not authorized"}, status: :unauthorized 
        end 
      end

      private 

      def user_params
        params.permit(:username,:email, :password, :password_confirmation)
      end
end
