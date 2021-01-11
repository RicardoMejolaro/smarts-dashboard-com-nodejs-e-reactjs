import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

/*Páginas*/
import HomePage from '../pages/HomePage';
import CustomerDetails from '../pages/CustomerDetails';
import ErrorPage from '../pages/ErrorPage';

export default function Router() {
    return (
        <Switch>
            <Route exact path={'/'}>
                <Redirect to={'/smarts-dashboard'} />
            </Route>
            <Route exact path={'/smarts-dashboard'}>
                <HomePage />
            </Route>
            <Route exact path={'/customer/:id'}>
                <CustomerDetails />
            </Route>
            <Route>
                <ErrorPage />
            </Route>
        </Switch>
    )
}