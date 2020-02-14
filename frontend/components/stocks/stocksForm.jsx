import React from 'react';
import { Link, Redirect } from 'react-router-dom';


class StocksForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.logout();
    }


    render() {
        return (

            <div className='stocks-body'>
                <div className='stocks-left'>
                <button className='logout-button' onClick={this.handleSubmit} type='submit'>Sign Out {this.props.user.email}</button>
                <p>Hi {this.props.user.name}</p>
                <br/>
                <p>You Have {this.props.user.money}</p>
                </div>
                <div className = 'stocks-right'>

                </div>

            </div>
        )
    }
};

export default StocksForm;