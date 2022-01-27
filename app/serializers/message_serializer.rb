class MessageSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id, :user
end
