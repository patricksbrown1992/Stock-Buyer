import React from 'react';
import { Link, Redirect } from 'react-router-dom';



class PortfolioForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loaded: false}
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount(){
        this.props.getTransactions(this.props.user).then(() => this.setState({loaded: true}))
       
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.logout();
    }
    



    render() {
        let transactions;
        if(!this.state.loaded){
            return null;
        }
        if(this.props.transactions.length < 1){
            transactions = '';
        } else {
            
            transactions = this.props.transactions.map( transaction => {
                // debugger
                return (
                    <li key={transaction.id}>
                        <div>Buy ({transaction.company_ticker}) - {transaction.net_shares} @ {transaction.purchase_price}</div>
                        
                    </li>
                )
            }, this)
        }

       
        return (

            <div className='portfolio-page'>
                <div className='portfolio-nav-bar'>
                    <button className='logout-button' onClick={this.handleSubmit} type='submit'>Sign Out {this.props.user.email}</button>
                    <Link to='/portfolio'>Portfolio</Link>

                </div>
                <div className='portfolio-body'>
                    <div className='transactions-left'>
                        <p>Hi {this.props.user.name}</p>
                        <p>Transactions</p>
                    
                        <ul>
                            {transactions}
                        </ul>
                    </div>

                </div>

            </div>
        )
    }
};

export default PortfolioForm;