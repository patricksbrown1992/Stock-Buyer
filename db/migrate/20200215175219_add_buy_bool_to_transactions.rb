class AddBuyBoolToTransactions < ActiveRecord::Migration[5.2]
  def change
    add_column :transactions, :buy, :boolean
  end
end
