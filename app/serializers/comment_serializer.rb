class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :username
end
