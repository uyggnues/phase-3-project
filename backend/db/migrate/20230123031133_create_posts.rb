class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :caption
      t.datetime :date
      t.integer :likes
      t.string :image
      t.string :username
      t.belongs_to :user
    
      t.timestamps
    end
    
  end
end
