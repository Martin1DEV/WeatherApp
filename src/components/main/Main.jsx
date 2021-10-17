import React from 'react';
import {Route} from 'react-router-dom'
import './Main.css';
import FiveDaysForecast from './FiveDaysForecast';
import TodayForecast from './TodayForecast';

const Main =()=>{

    return(
        <>
<div className='main'>
    <Route exact path='/today' component={TodayForecast}/>
    <Route  path='/forecast' component={FiveDaysForecast}/>
    </div>
        </>
    )



   
}


export default Main;

