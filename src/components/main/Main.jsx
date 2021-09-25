import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './Main.css';
import FiveDaysForecast from './FiveDaysForecast';
import TodayForecast from './TodayForecast';

const Main =()=>{

    return(
        <>
    <Switch>
    <Route  path='' component={TodayForecast}/>
    <Route  path='/forecast' component={FiveDaysForecast}/>
    </Switch>
        </>
    )



   
}


export default Main;

