class UpdateBusinesses < ActiveRecord::Migration[5.2]
  def change
    remove_index :businesses, name: :index_businesses_on_ticker
  end
end
