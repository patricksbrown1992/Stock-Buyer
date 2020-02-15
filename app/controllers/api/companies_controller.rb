class Api::CompaniesController < ApplicationController
    def index
        @companies = Company.all
        render json: @companies, status: 200
    end

    def show
        @company = Company.find_by(id: params[:id])
        if @company
            render json: @company, status: 200
        else
            render json: @company.errors.full_messages, status: 404
        end
    end

    def create
        @company = Company.create(company_params)
        if @company.save 
            render json: @company, status: 200
        else
            render json: @company.errors.full_messages, status: 422
        end
    end

    def update
        @company = Company.find_by(id: params[:id])
        if @company.update(company_params)
            render json: @company, status: 200
        else
            render json: @company.errors.full_messages, status: 422
        end
    end

    def destroy
        @company = Company.find_by(id: params[:id])
        if @company.destroy
            render json: @company, status: 200
        else
            render json: @company.errors.full_messages, status: 422
        end
    end

    private
    def company_params
        params.require(:company).permit(:ticker, :name, :market_cap, :dividend, :avg_volume)
    end
end