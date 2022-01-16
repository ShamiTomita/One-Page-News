class CreateArticles < ActiveRecord::Migration[6.1]
  def change
    create_table :articles do |t|
      t.string :title
      t.string :author
      t.string :news_org
      t.string :published
      t.string :description
      t.string :url
      t.string :image_url
      t.string :content
      t.string :category
      t.boolean :is_top
      t.timestamps
    end
  end
end
