import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Challenge02 from './components/challenge02/Challenge02';
import Challenge03Father from './components/Challenge03/Challenge03Father';
import Challenge04Fahter from './components/Challenge04/Challenge04Father';
import Challenge05Fahter from './components/Challenge05/Challenge05Father';

import Header from './components/Header/Header';


const Routes = () => {
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header/>
            <Switch>
                <Route exact path="/" render={props => <Challenge02 {...props} number={2} nome="Carro"/>}/>
                <Route exact path="/challenge03" render={props => <Challenge03Father {...props} number={2} nome="Carro"/>}/>
                <Route exact path="/challenge04" component={Challenge04Fahter}/>
                <Route exact path="/challenge05" component={Challenge05Fahter}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;