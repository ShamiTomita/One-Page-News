class CreateArticles < ActiveRecord::Migration[6.1]
  def change
    create_table :articles do |t|
      t.string :title
      t.string :author
      t.string :news_org
      t.string :category
      t.string :published
      t.integer :user_id
      t.string :description

      t.timestamps
    end
  end
end
