class DropCompaniesTable < ActiveRecord::Migration[5.2]
  def up
    drop_table :companies
  end
end
