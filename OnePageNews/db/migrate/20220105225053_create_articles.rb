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
      t.text :content
      t.timestamps
    end
  end
end
