class AddMoneyToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :money, :integer
  end
end
