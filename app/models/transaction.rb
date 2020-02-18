class Transaction < ApplicationRecord
    validates :purchase_price, :company_ticker, :net_shares, presence: true
    validates :purchase_price, numericality: { greater_than: 0 }
    validate :less_than_money
    # validate :whole_num

    def less_than_money
        user = User.find_by(id: self.user_id)
        unless user.money >= self.purchase_price * self.net_shares
            errors[:Not] << " enough money"
        end

    end

    # def whole_num
    #     unless self.purchase_shares > 0 && self.purchase_shares
    #         errors[:Not] << "A whole number"
    #     end

    # end

    belongs_to :user
    # belongs_to :company,
    #     primary_key: :ticker,
    #     foreign_key: :company_ticker,
    #     class_name: :Company
end
