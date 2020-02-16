class Api::BusinessesController < ApplicationController
  
    def index
        @businesses = Business.all
        render json: @businesses, status: 200
    end

    def show
        @business = Business.find_by(id: params[:id])
        if @business
            render json: @business, status: 200
        else
            render json: @business.errors.full_messages, status: 404
        end
    end

    def create
        @business = Business.create(business_params)
     
        if @business.save 
            render json: @business, status: 200
        else
            render json: @business.errors.full_messages, status: 422
        end
    end

    def update
        @business = Business.find_by(id: params[:id])
     
        if @business.update(business_params)
          
            render json: @business, status: 200
        else
           
            render json: @business.errors.full_messages, status: 422
        end
    end

    def destroy
        @business = Business.find_by(id: params[:id])
        # debugger
        if @business.destroy
            render json: @business, status: 200
        else
            render json: @business.errors.full_messages, status: 422
        end
    end

    private
    def business_params
        params.require(:business).permit(:ticker, :price_now, :purchase_price, :net_shares, :user_id)
    end
end 