class User < ApplicationRecord
    has_secure_password

    has_many :likes
    has_many :saved_posts
    has_many :comments
    has_many :messages
    has_many :follows
    
    has_many :posts, through: :saved_posts

    validates :username, presence: true, uniqueness: true
    validates :email, format: /\w+@\w+\.{1}[a-zA-Z]{2,}/, presence: true, uniqueness: true
end
