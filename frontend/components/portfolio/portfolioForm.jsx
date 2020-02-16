import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import {getPrice, getNews} from '../../util/iexUtil';


class PortfolioForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loaded: false, ticker: '', qty: 0, price: [], symbol: []}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){

        this.props.getTransactions(this.props.user).then(() => this.setState({loaded: true}))
        
        
    }

 

    handleSubmit(e) {
        e.preventDefault();
        this.props.logout();
    }
    handleChange(field) {
        // debugger
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }
    handleClick(e){
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
      
           
            getPrice(ticker).then(ele => this.setState({price: ele.latestPrice, symbol: ele.symbol}, () => this.props.createTransaction({
                'user_id': user.id, 
                'company_ticker': ticker, 
                'purchase_price': this.state.price, 
                'average_price': this.state.price, 
                'purchase_shares': quant,
                'net_shares': quant,
                'buy': true
            })), () => this.props.portfolioTicker())
   
           
        }
    }



    render() {
     
        let transactions;
        let price;
        if(!this.state.loaded){
            return null;
        }
        
      

        if(this.props.transactions.length < 1){
            transactions = '';
        } else {
            
            transactions = this.props.transactions.map( transaction => {
     

                return (
                    <li key={transaction.id}>
                        <div>{transaction.company_ticker} - {transaction.net_shares} shares ${transaction.purchase_price}</div>
                    </li>
                )
            }, this)
        }

        if(this.state.price){
       
            price = <span> {this.state.symbol} price: {this.state.price}</span>
                
        } else {
            price = ''
        }
  
        

   
        return (

            <div className='portfolio-page'>
                <div className='portfolio-nav-bar'>
                    <button className='logout-button' onClick={this.handleSubmit} type='submit'>Sign Out {this.props.user.email}</button>
                    <Link to='/transactions'>Transactions</Link>

                </div>
                <div className='portfolio-body'>
                    <div className='portfolio-left'>
                        <p>Hi {this.props.user.name}</p>
                        <p>Portfolio</p>
                        <ul>

                            {transactions}
                        </ul>
                        
                    </div>
                    <div className = 'portfolio-right'>
                        <p>Cash - ${this.props.user.money}</p>
                        <input  placeholder='Ticker' type="text" value={this.state.ticker} onChange={this.handleChange('ticker')}/>
                        <input type="text" placeholder='Qty' value={this.state.qty} onChange={this.handleChange('qty')} />
                        <button onClick={this.handleClick}>Buy</button>
                        <ul>
                   
                            {price}
                        </ul>
                        
                    </div>

                </div>

            </div>
        )
    }
};

export default PortfolioForm;