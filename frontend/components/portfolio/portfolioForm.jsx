import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import {getPrice} from '../../util/iexUtil';



class PortfolioForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loaded: false, ticker: '', qty: 0, price: 0, symbol: [], cost: 0}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClickBuy = this.handleClickBuy.bind(this);
        this.handleClickSell = this.handleClickSell.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleTriage = this.handleTriage.bind(this);
    }

    componentDidMount(){
        
        // gets all stocks

        this.props.getBusinesses(this.props.user)
        // gets price for each stock
        .then(() => Object.values(this.props.businesses).forEach(business => {
            getPrice(business.ticker)
        // update stock with new price
        .then(res => this.props.updateBusiness(this.props.user.id, {price_now: res.latestPrice, id: business.id, user_id: this.props.user.id, purchase_price: business.purchase_price, net_shares: business.net_shares, ticker: business.ticker}))
        }))
        // get all the transactions
        .then(()=> this.props.getTransactions(this.props.user))
        // allow render
        .then(() => this.setState({loaded: true}))
       
        
    }


    handleClickSell(e){
        e.preventDefault();
        let ticker = this.state.ticker.toUpperCase();
        let quant = parseInt(this.state.qty);
        let user = this.props.user;
        // reject if you don't own the stock
        if(!this.props.businesses[ticker]){
          
            return this.props.portfolioSell()
        // reject attempts to sell more stock than you have
        } else if(quant > this.props.businesses[ticker].net_shares){
           
            return this.props.portfolioMoneySell();
        }else { 
            let curr_net_shares = this.props.businesses[ticker].net_shares;
                let now_net_shares = curr_net_shares - quant;
                let id = this.props.businesses[ticker].id;
            // if selling all stocks for a company
            if(now_net_shares == 0){
                // get price
                this.handleCheck(ticker)
                 // creates transaction
                .then(() => this.props.createTransaction({
                        'user_id': user.id, 
                        'company_ticker': ticker, 
                        'purchase_price': this.state.price, 
                        'net_shares': quant,
                        'buy': false}))
                // change user's money
                .then( () => this.props.updateUser({id: user.id, money: user.money + this.state.cost}))
                // delete stock because there are zero stocks
                .then(() => this.props.deleteBusiness( 
                    {id: id, user_id: user.id, ticker: ticker, net_shares: 0, purchase_price: this.state.price, price_now: this.state.price})) 
                   

                    
            } else {
                // get price
                this.handleCheck(ticker)
                // creates transaction
                .then(() => this.props.createTransaction({
                        'user_id': user.id, 
                        'company_ticker': ticker, 
                        'purchase_price': this.state.price, 
                        'net_shares': quant,
                        'buy': false}))
                // change user's money
                .then( () => this.props.updateUser({id: user.id, money: user.money + this.state.cost}))
                // update stock total
                .then(() => this.props.updateBusiness(user.id, 
                    {id: id, user_id: user.id, ticker: ticker, net_shares: now_net_shares, purchase_price: this.state.price, price_now: this.state.price}))

                 
            }
    
            
        }
    }

    handleTriage(){
        if(parseInt(this.state.cost) > this.props.user.money){
            return this.props.portfolioMoney()
            
        } 
    }

    handleCheck(){
        
        let ticker = this.state.ticker.toUpperCase();
        let quant = parseInt(this.state.qty);
        if(!Number.isInteger(quant) || this.state.qty.includes('.') || quant < 1 ){
            return this.props.portfolioBuy();
        } else {
            
            return getPrice(ticker).then(ele => this.setState({cost: (ele.latestPrice * quant).toFixed(2), price: ele.latestPrice}), (err) => this.props.portfolioTicker())
            
        }
        

    }

 

    handleSubmit(e) {
        e.preventDefault();
        this.props.clearTransactions();
        this.props.clearBusinesses();
        
        this.props.logout();
    }
    handleChange(field) {
    
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }
    handleClickBuy(e){
        
        e.preventDefault()
        let ticker = this.state.ticker.toUpperCase();
        let quant = parseInt(this.state.qty);
        let user = this.props.user;
        
        // if you already own some stock in that company
        if(this.props.businesses[ticker]){
                
            let curr_net_shares = this.props.businesses[ticker].net_shares;
            let now_net_shares = quant + curr_net_shares;
            let id = this.props.businesses[ticker].id
                // gets the price
            this.handleCheck(ticker)
                // checks to see if it's too much
            .then(() => this.handleTriage())
                // creates transaction
            .then(() => this.props.createTransaction({
                'user_id': user.id, 
                'company_ticker': ticker, 
                'purchase_price': this.state.price, 
                'net_shares': quant,
                'buy': true}))
                // then sets the state with the price for coming API calls
                .then( () => this.props.updateUser({id: user.id, money: user.money - this.state.cost}))
                // updates the stock with the new total shares amount
                .then(() => this.props.updateBusiness(user.id, 
                    {id: id, user_id: user.id, ticker: ticker, net_shares: now_net_shares, purchase_price: this.state.price, price_now: this.state.price}))
                


            } else {
               
                    // gets the price
                  this.handleCheck(ticker)

                    // checks to see if it's too much
                    .then(() => this.handleTriage())
                    // creates transaction
                    .then(() => this.props.createTransaction({
                        'user_id': user.id, 
                        'company_ticker': ticker, 
                        'purchase_price': this.state.price, 
                        'net_shares': quant,
                        'buy': true}))
                    // updates the user's money
                    .then( () => this.props.updateUser({id: user.id, money: user.money - this.state.cost}))

                    // creates the stock in the portfolio 
                    .then(() => this.props.createBusiness(user.id, 
                        {user_id: user.id, 
                        ticker: ticker, 
                        net_shares: quant, 
                        purchase_price: this.state.price, 
                        price_now: this.state.price}))
                    
                
            }
           
        
    }



    render() {
  
       
        let businesses;
        
        let total = 0;
        let cost_label;
        let cost;
       
        if(!this.state.loaded){
            return null;
        }

        
       if(this.state.cost !== 0){
            cost_label = <p id='total-cost'>Total cost:</p>;
            cost = <p id='total-cost'>{this.state.cost}</p>;
       } else {
            cost_label = '';
            cost = '';
       }
  
        if(Object.values(this.props.businesses).length < 1){
          
            businesses = '';
            
        } else {
            businesses = Object.values(this.props.businesses).map( business => {
                let count = business.price_now * business.net_shares
                let percent = ((business.price_now / business.purchase_price) * 100 -100).toFixed(2);
                total += count
                // changes color based on performance
                if(business.price_now > business.purchase_price){
                    return (
                        <li id='green' className= 'transaction-li' key={business.id}>
                            {business.ticker} - {business.net_shares} shares ${count.toFixed(2)} ({percent}%)
                        </li>
                    )
                } else if (business.price_now == business.purchase_price){
                    return (
                        <li id='grey' className= 'transaction-li' key={business.id}>
                            {business.ticker} - {business.net_shares} shares ${count.toFixed(2)} ({percent}%)
                        </li>
                    )
                }else {
                    return (
                        <li id='red' className= 'transaction-li' key={business.id}>
                            {business.ticker} - {business.net_shares} shares ${count.toFixed(2)} ({percent}%)
                        </li>
                    )
                }
                
            }, this)
        }
      



        

   
        return (

            <div className='portfolio-page'>
                <div className='portfolio-nav-bar'>
                    <button className='logout-button' onClick={this.handleSubmit} type='submit'>Sign Out</button>
                    <Link to='/transactions'>Transactions</Link>

                </div>
                <div className='portfolio-body'>
                    <div className='portfolio-left'>
                        <p id="username">Hi {this.props.user.name}</p>
                        <br/>
                        <p id='transactions-title'>Current Portfolio Value ${total.toFixed(2)}</p>
                        
                        <ul>
                            {businesses}
                        </ul>
                        
                    </div>
                    <div className = 'portfolio-right'>
                        <p>Cash - ${this.props.user.money}</p>
                        <input  placeholder='Ticker' type="text" value={this.state.ticker} onChange={this.handleChange('ticker')}/>
                        <input type="text" placeholder='Qty' value={this.state.qty} onChange={this.handleChange('qty')} />
                        <button onClick={this.handleClickBuy}>Buy</button>
                        <br/>
                        <button onClick={this.handleClickSell}>Sell</button>
                        <br/>
                        <button onClick={this.handleCheck}>Check Total Cost</button>
                        <br/>
                        {cost_label}
                        <br/>
                        {cost}
                        <br/>

                       
                       
                    </div>

                </div>

            </div>
        )
    }
};

export default PortfolioForm;