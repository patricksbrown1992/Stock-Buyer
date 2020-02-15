class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.string :ticker, null: false
      t.string :name, null: false
      t.integer :avg_volume, null: false
      t.float :dividend
      t.float :market_cap, null: false
      t.timestamps
    end
    add_index :companies, :ticker, unique: true
    add_index :companies, :name, unique: true
 
  end
end
