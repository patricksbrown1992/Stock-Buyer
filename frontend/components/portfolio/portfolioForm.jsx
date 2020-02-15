import React from 'react';
import { Link, Redirect } from 'react-router-dom';


class PortfolioForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loaded: false, ticker: '', qty: 0}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
         this.props.getCompanies().then(() => this.setState({loaded: true}))
       
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



    render() {
        let companies;
        if(!this.state.loaded){
            return null;
        }
        debugger
        if(this.props.companies.length < 1){
            companies = '';
        } else {
            
            companies = this.props.companies.map( company => {
                return (
                    <li key={company.id}>
                        <div>{company.name}</div>
                    </li>
                )
            })
        }

        debugger
        return (

            <div className='portfolio-body'>
                <div className='portfolio-left'>
                    <button className='logout-button' onClick={this.handleSubmit} type='submit'>Sign Out {this.props.user.email}</button>
                    <p>Hi {this.props.user.name}</p>
                    <p>Portfolio</p>
                </div>
                <div className = 'portfolio-right'>
                    <p>Cash - ${this.props.user.money}</p>
                    <input  placeholder='Ticker' type="text" value={this.state.ticker} onChange={this.handleChange('ticker')}/>
                        <input type="text" placeholder='Qty' value={this.state.qty} onChange={this.handleChange('qty')} />
                    <ul>
                        {companies}
                    </ul>
                </div>

            </div>
        )
    }
};

export default PortfolioForm;