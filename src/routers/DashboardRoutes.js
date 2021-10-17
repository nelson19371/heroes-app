import React from 'react'
import { Switch,Route } from 'react-router'
import { Marvel } from '../components/marvel/Marvel'
import { Navbar } from '../components/ui/Navbar'
import {HeroScreen} from '../components/heroes/HeroScreen'
import {DcScreen} from '../components/dc/DcScreen'
import { SearchScreen } from '../components/search/SearchScreen'
export const DashboardRoutes = () => {
    return (
        <>
        <Navbar/>
        <div className="container mt-2">
            <Switch>
                <Route exact path="/marvel" component={Marvel}/>
                <Route exact path="/hero/:heroeId" component={HeroScreen}/>
                <Route exact path="/dc" component={DcScreen}/>
                <Route exact path="/search" component={SearchScreen}/>
            </Switch>
            
        </div>
        
        
        
        </>
        
    )
}
