class Transaction < ApplicationRecord
    validates :purchase_price, :purchase_shares, :average_price, :net_shares, presence: true
    validates :purchase_price, numericality: { greater_than: 0 }
    validates :net_shares, :average_price, numericality: { greater_than_or_equal_to: 0 }

    belongs_to :user
    belongs_to :company
end
