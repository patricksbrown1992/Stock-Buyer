class Transaction < ApplicationRecord
    validates :purchase_price, :company_ticker, :purchase_shares, :average_price, :buy, :net_shares, presence: true
    validates :purchase_price, numericality: { greater_than: 0 }
    validates :net_shares, :average_price, numericality: { greater_than_or_equal_to: 0 }
    validate :less_than_money
    # validate :whole_num

    def less_than_money
        user = User.find_by(id: self.user_id)
        debugger
        unless user.money >= self.purchase_price * self.purchase_shares
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
