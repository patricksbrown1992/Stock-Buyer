import React from 'react';
import { Link, Redirect } from 'react-router-dom';


class StocksForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loaded: false}
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
         this.props.getCompanies().then(() => this.setState({loaded: true}))
       
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.logout();
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

            <div className='stocks-body'>
                <div className='stocks-left'>
                    <button className='logout-button' onClick={this.handleSubmit} type='submit'>Sign Out {this.props.user.email}</button>
                    <p>Hi {this.props.user.name}</p>
                    <br/>
                    <p>You Have {this.props.user.money}</p>
                </div>
                <div className = 'stocks-right'>
                    <ul>
                        {companies}

                    </ul>
                </div>

            </div>
        )
    }
};

export default StocksForm;