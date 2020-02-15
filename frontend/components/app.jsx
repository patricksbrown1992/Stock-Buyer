import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SplashForm from './splash/splashForm';
import LogInForm from './logIn/logInContainer';
import PortfolioContainer from './portfolio/portfolioContainer';
import SignUpForm from './signUp/signUpContainer';
import { Authorized, ProtectedRoute } from '../util/routeUtil';
import TransactionsContainer from './transactions/transactionsContainer';
import Modal from './modal/modal'

const App = () => (

    <>
         <Modal />
        <Switch>
            
            <Route exact path='/' component={SplashForm} />
            <Authorized path='/login' component={LogInForm} />
            <Authorized path='/signup' component={SignUpForm} />
            <ProtectedRoute path='/portfolio' component={PortfolioContainer} />
            <ProtectedRoute path='/transactions' component={TransactionsContainer} />
        </Switch>
    </>


)
export default App;