class ChatChannel < ApplicationCable::Channel
    rescue_from 'MyError', with: :deliver_error_message

    def subscribed
       stream_from "chat_#{params[:room]}"
       ActionCable.server.broadcast("chat_#{params[:room]}", {content: "#{current_user.name} has enetered #{params[:room]}"})
    end
    
    def receive(data)
        message = Message.create!(content: data['content'], user: current_user)
        ActionCable.server.broadcast("chat_#{params[:room]}", message)
    end

    def unsubscribed
       ActionCable.server.broadcast("chat_#{params[:room]}", {content: "#{current_user.name} has left the #{params[:room]}"})
    end

    
    private

    def deliver_error_message(e)
        broadcast_to(...)
    end
end