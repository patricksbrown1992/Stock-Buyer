import React from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '', name: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field) {

        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger
        if (e.currentTarget.children[0].classList[0] == 'enter-username') {

            this.props.signup(this.state);
            this.setState({ email: '', password: '' });
            this.props.clearErrors();

        } else {
            const email = 'admin@admin.com';
            const password = '123456';
            const person = { email, password };
            this.props.login(person);
            this.setState({ email: '', password: '' });
            this.props.clearErrors();
        }

    }
    componentDidMount() {
        this.props.clearErrors();
    }

    render() {

        let errors;
        if (this.props.errors.length > 0) {

            errors = this.props.errors.map((error, idx) => {
                return <li key={idx}>{error}</li>
            });
        }

        return (

            <div className='outerdiv'>
                <div className='sign-up-form'>

                    <div className="sign-up-top">
                        <h1 className='log-in-stockbuyer'>StockBuyer</h1>
                    </div>

                    <div className="sign-up-middle">
                        <form className='demo-form' onSubmit={this.handleSubmit}>
                            <div className="demo-button">
                                <button type='submit'>Demo for Free</button>
                            </div>
                        </form>
                        <div className="sign-up-inputs">

                            <input className="sign-up-email-input" type="text" value={this.state.email} placeholder='Email' onChange={this.handleChange('email')} />
                            <input className="sign-up-email-input" type="password" placeholder='Password' value={this.state.password} onChange={this.handleChange('password')} />
                            <input className="sign-up-email-input" type="text" placeholder='Name' value={this.state.name} onChange={this.handleChange('name')} />
                        </div>
                        <ul>
                            <br />
                            {errors}
                            <br />
                        </ul>
                        <form className='enter-user-form' onSubmit={this.handleSubmit}>
                            <div className='enter-username'>

                                <button type='submit'>Continue</button>
                            </div>
                        </form>
                    </div>
                    <div className="sign-up-bottom">
                        <h3>Already have an account?</h3>
                        <div className='redirect-to-login-signup'>
                            <Link to='/login'>Sign In</Link>
                        </div>
                    </div>

                </div>
            </div>

        );
    };
};

export default SignUpForm;