class Business < ApplicationRecord
    validates :purchase_price, :ticker, :net_shares, :price_now, :user_id, presence: true
    validates :purchase_price, :net_shares, :price_now, numericality: { greater_than: 0 }
    belongs_to :user
    
end
