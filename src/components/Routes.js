import React from 'react'

import { Router, Switch, Route } from 'react-router'

import Login from '../pages/login'
import Register from '../pages/register'
import Home from '../pages/home'
import NotFound from './NotFound'
import PrivateRoute from './PrivateRoute'

import {history} from '../history'
import Client from '../pages/client'
import News from '../pages/news'
import Provider from '../pages/Provider'
import RegisterProvider from '../pages/RegisterProvider'

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route component={Login} exact path="/login"/>
            <Route component={Register} exact path="/register"/>
            <PrivateRoute component={Home} exact path="/"/>
            <PrivateRoute component={Client} exact path="/client"/>
            <PrivateRoute component={News} exact path="/news"/>
            <PrivateRoute component={Provider} exact path="/provider"/>
            <PrivateRoute component={RegisterProvider} exact path="/provider/register"/>

            <PrivateRoute component={NotFound}/>
        </Switch>
    </Router>
)

export default Routes
