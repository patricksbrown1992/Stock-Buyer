class Transaction < ApplicationRecord
    validates :purchase_price, :company_ticker, :net_shares, presence: true
    validates :purchase_price, numericality: { greater_than: 0 }
    validate :less_than_money


    def less_than_money
        user = User.find_by(id: self.user_id)
        unless user.money >= self.purchase_price * self.net_shares
            errors[:Not] << " enough money"
        end

    end


    belongs_to :user
  
end
