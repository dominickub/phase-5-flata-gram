class LikeSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :username, :"total-likes"
end
