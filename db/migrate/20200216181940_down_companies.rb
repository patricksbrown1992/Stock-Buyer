class DownCompanies < ActiveRecord::Migration[5.2]
  def down
    drop_table :companies
  end
end
