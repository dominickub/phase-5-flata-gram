class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :image
      t.text :caption, optional: true
      t.integer :user_id
      t.integer :total_likes
      
      t.timestamps
    end
  end
end
