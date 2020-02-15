class Api::TransactionsController < ApplicationController
    def create
        @transaction = Transaction.new(transaction_params)
        @transaction.user_id = current_user.id
        if @transaction.save
            render @transaction, status: 200
        else
            render json: @transaction.errors.full_messages, status: 422
        end
    end

    def index
        @user = User.find(params[:user_id])

        @transactions = @user.transactions
        render json: @transactions, status: 200
    end

    private
    def transaction_params
        params.require(:transaction).permit(:company_id, :purchase_price, :purchase_shares, :average_price, :net_shares)
    end
end