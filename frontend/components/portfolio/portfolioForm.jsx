import React from 'react';
import { Link, Redirect } from 'react-router-dom';


class PortfolioForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loaded: false, ticker: '', qty: 0}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){

        this.props.getTransactions(this.props.user).then(() => this.props.getCompanies()).then(() => this.setState({loaded: true}))
        
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
    handleClick(e){
        e.preventDefault();

        let ticker = this.state.ticker;
        let amt = this.props.companies[ticker].market_cap;
        let quant = parseInt(this.state.qty);
        let user = this.props.user;
        if(!Number.isInteger(quant) || this.state.qty.includes('.') || quant < 1 ){
            return this.props.portfolioBuy();
        } else if(!this.props.companies[ticker]){
            return this.props.portfolioTicker();
        } else if (user.money < (amt * quant).toFixed(2)){
    
            return this.props.portfolioMoney();
        } else {
            let transaction = {};
 
            transaction['user_id'] = user.id;
            transaction['company_ticker'] = ticker;
            
            transaction['purchase_price'] = amt;
            transaction['purchase_shares'] = quant;
            transaction['average_price'] = amt;
            transaction['net_shares'] = quant;
            transaction['buy'] = true;
            
            user.money = (user.money -= amt * quant).toFixed(2);
 
            this.props.createTransaction(transaction).then(() => this.setState({qty: 0, ticker:''}), this.props.updateUser(user))
        }
    }



    render() {
        let companies;
        let transactions;
        if(!this.state.loaded){
            return null;
        }
   
        if(Object.values(this.props.companies).length < 1){
            companies = '';
        } else {
            
            companies = Object.values(this.props.companies).map( company => {
                return (
                    <li key={company.id}>
                        <div>{company.name}</div>
                    </li>
                )
            })
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
                            {companies}
                        </ul>
                    </div>

                </div>

            </div>
        )
    }
};

export default PortfolioForm;