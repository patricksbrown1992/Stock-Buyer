import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SplashForm from './splash/splashForm';
import LogInForm from './logIn/logInContainer';
import StocksForm from './stocks/stocksContainer';
import SignUpForm from './signUp/signUpContainer';
import { Authorized, ProtectedRoute } from '../util/routeUtil';


const App = () => (

    <>

        <Switch>
            
            <Route exact path='/' component={SplashForm} />
            <Authorized path='/login' component={LogInForm} />
            <Authorized path='/signup' component={SignUpForm} />
            <ProtectedRoute path='/stocks' component={StocksForm} />
        </Switch>
    </>


)
export default App;