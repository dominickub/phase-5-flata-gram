class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :email, :posts, :post_ids
end
