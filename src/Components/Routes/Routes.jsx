import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Homepage } from '../Homepage'
import { Navbar1 } from '../Navbar1'

export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Navbar1 />
                    <Homepage />
                </Route>
            </Switch>
        </div>
    );
}