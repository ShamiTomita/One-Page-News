class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :zipcode
      t.string :lat
      t.string :lon

      t.timestamps
    end
  end
end
