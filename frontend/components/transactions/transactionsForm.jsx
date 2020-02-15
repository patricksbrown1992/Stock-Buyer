import React from 'react';
import { Link, Redirect } from 'react-router-dom';


class PortfolioForm extends React.Component {
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
        

        // debugger
        return (

            <div className='portfolio-page'>
                <div className='portfolio-nav-bar'>
                    <button className='logout-button' onClick={this.handleSubmit} type='submit'>Sign Out {this.props.user.email}</button>
                    <Link to='/portfolio'>Portfolio</Link>

                </div>
                <div className='portfolio-body'>
                    <div className='portfolio-left'>
                        <p>Hi {this.props.user.name}</p>
                        <p>Transactions</p>
                        
                    </div>
                    <div className = 'portfolio-right'>
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