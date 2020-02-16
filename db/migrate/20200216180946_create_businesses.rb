class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :ticker, null: false
      t.float :purchase_price, null: false
      t.float :price_now, null: false
      t.integer :net_shares, null: false
      t.timestamps
    end
    add_index :businesses, :ticker, unique: true
    
  end
end
