class UpdateTransactions < ActiveRecord::Migration[5.2]
  def change
    remove_column :transactions, :purchase_shares
    remove_column :transactions, :average_price
  end
end
