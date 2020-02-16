@business.each do |business|
    json.set! business.id do
        json.extract! business, :id, :ticker, :purchase_price, :net_shares, :price_now
    end
end 