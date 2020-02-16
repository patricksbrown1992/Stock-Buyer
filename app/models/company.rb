class Company < ApplicationRecord
    validates :ticker, :name, :market_cap, :avg_volume, presence: true
    validates :ticker, :name, uniqueness: true

    # has_many :transactions, 
    # primary_key: :ticker,
    # foreign_key: :company_ticker,
    # class_name: :Transaction
end