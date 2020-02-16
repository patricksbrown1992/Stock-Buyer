import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import {getPrice, getNews} from '../../util/iexUtil';


class PortfolioForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loaded: false, ticker: '', qty: 0, price: [], symbol: []}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClickBuy = this.handleClickBuy.bind(this);
        this.handleClickSell = this.handleClickSell.bind(this);

    }

    componentDidMount(){

        this.props.getBusinesses(this.props.user).then( ()=> this.props.getTransactions(this.props.user)).then(() => this.setState({loaded: true}))
        
    }

    // componentDidUpdate(prevState){
    //     const num = Object.values(prevState.transactions).length;
    //     if(num !== Object.values(this.props.transactions).length){
    //         console.log('here')
    //         if( num > Object.values(prevState.transactions).length){
                
    //         }else {

    //         }
    //     }
    // }

    handleClickSell(e){
        e.preventDefault();
        let ticker = this.state.ticker;
        let quant = parseInt(this.state.qty);
        let user = this.props.user;
  
        if(!Number.isInteger(quant) || this.state.qty.includes('.') || quant < 1 ){
            return this.props.portfolioBuy();
        } else if(!this.props.businesses[ticker]){
          
            return this.props.portfolioSell()
        } else if(quant > this.props.businesses[ticker].net_shares){
           
            return this.props.portfolioMoneySell();
        }else { 
            let curr_net_shares = this.props.businesses[ticker].net_shares;
                let now_net_shares = curr_net_shares - quant;
                let id = this.props.businesses[ticker].id;
            if(now_net_shares == 0){
                getPrice(ticker).then(ele => this.setState({price: ele.latestPrice, symbol: ele.symbol}
                    
                    , () => this.props.createTransaction({
                    'user_id': user.id, 
                    'company_ticker': ticker, 
                    'purchase_price': this.state.price, 
                    'average_price': this.state.price, 
                    'purchase_shares': quant,
                    'net_shares': quant,
                    'buy': false
                }) 
                ))
                .then( () => this.props.updateUser({id: user.id, money: user.money + this.state.price * quant })).then(() => this.props.deleteBusiness( 
                    {id: id, user_id: user.id, ticker: ticker, net_shares: 0, purchase_price: this.state.price, price_now: this.state.price}
                    
                    )) 
            } else {
                
                getPrice(ticker).then(ele => this.setState({price: ele.latestPrice, symbol: ele.symbol}
                    
                    , () => this.props.createTransaction({
                    'user_id': user.id, 
                    'company_ticker': ticker, 
                    'purchase_price': this.state.price, 
                    'average_price': this.state.price, 
                    'purchase_shares': quant,
                    'net_shares': quant,
                    'buy': false
                }) 
                ))
                .then( () => this.props.updateUser({id: user.id, money: user.money + this.state.price * quant })).then(() => this.props.updateBusiness(user.id, 
                    {id: id, user_id: user.id, ticker: ticker, net_shares: now_net_shares, purchase_price: this.state.price, price_now: this.state.price}
                    
                    )) 
     
            }
    
            
        }
    }

 

    handleSubmit(e) {
        e.preventDefault();
        this.props.logout();
    }
    handleChange(field) {
    
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }
    handleClickBuy(e){
        e.preventDefault();

        let ticker = this.state.ticker;
        // let amt = this.props.companies[ticker].market_cap;
        let quant = parseInt(this.state.qty);
        let user = this.props.user;
        if(!Number.isInteger(quant) || this.state.qty.includes('.') || quant < 1 ){
            return this.props.portfolioBuy();
        // } else if(!this.props.companies[ticker]){
        //     return this.props.portfolioTicker();
        // } else if (user.money < (amt * quant).toFixed(2)){
    
        //     return this.props.portfolioMoney();
        } else {
            if(this.props.businesses[ticker]){
                let curr_net_shares = this.props.businesses[ticker].net_shares;
                let now_net_shares = quant + curr_net_shares;
                let id = this.props.businesses[ticker].id
                getPrice(ticker).then(ele => this.setState({price: ele.latestPrice, symbol: ele.symbol}
                    
                    , () => this.props.createTransaction({
                    'user_id': user.id, 
                    'company_ticker': ticker, 
                    'purchase_price': this.state.price, 
                    'average_price': this.state.price, 
                    'purchase_shares': quant,
                    'net_shares': quant,
                    'buy': true
                }) 
                ))
                .then( () => this.props.updateUser({id: user.id, money: user.money - this.state.price * quant })).then(() => this.props.updateBusiness(user.id, 
                    {id: id, user_id: user.id, ticker: ticker, net_shares: now_net_shares, purchase_price: this.state.price, price_now: this.state.price}
                    
                    )) 
            } else {
                
                getPrice(ticker).then(ele => this.setState({price: ele.latestPrice, symbol: ele.symbol}, () => this.props.createTransaction({
                    'user_id': user.id, 
                    'company_ticker': ticker, 
                    'purchase_price': this.state.price, 
                    'average_price': this.state.price, 
                    'purchase_shares': quant,
                    'net_shares': quant,
                    'buy': true
                })
                
                )).then( () => this.props.updateUser({id: user.id, money: user.money - this.state.price * quant }))
                .then(() => this.props.createBusiness(user.id, 
                    {user_id: user.id, ticker: ticker, net_shares: quant, purchase_price: this.state.price, price_now: this.state.price}
                    
                    )) 
            }
           
        }
    }



    render() {
  
       
        let businesses;
        let total = 0;
        if(!this.state.loaded){
            return null;
        }
  
        if(Object.values(this.props.businesses).length < 1){
          
            businesses = '';
            
        } else {
            businesses = Object.values(this.props.businesses).map( business => {
                let count = business.price_now * business.net_shares
           
                total += count
                return (
                    <li className= 'transaction-li' key={business.id}>
                        {business.ticker} - {business.net_shares} shares ${count.toFixed(2)}
                    </li>
                )
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
                        <p id='transactions-title'>Portfolio {total.toFixed(2)}</p>
                        
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
                        
                        price: {this.state.price}
                    </div>

                </div>

            </div>
        )
    }
};

export default PortfolioForm;