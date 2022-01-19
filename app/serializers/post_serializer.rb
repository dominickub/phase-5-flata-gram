class PostSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :image, :caption, :total_likes, :image_url, :user_id

  def image_url
    if object.picture.attached?
    rails_blob_url(object.picture, only_path: true)
    end
  end
end
