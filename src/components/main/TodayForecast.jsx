import React, {useContext} from 'react';
import { AppContext } from '../../store/StoreProvider';

import './TodayForecast.css';




const TodayForecast=()=>{

    const {today}=useContext(AppContext);
    console.log(today)

   const{ temp, feels_like,pressure,humidity}=today.main;
   console.log(today.dt)
   const time=new Date(today.dt*1000).toLocaleString();
   const sunriseHour=new Date(today.sys.sunrise*1000).getHours()
   const sunriseMinutes=new Date(today.sys.sunrise*1000).getMinutes()
   const sunsetHour=new Date(today.sys.sunset*1000).getHours()
   const sunsetMinutes=new Date(today.sys.sunset*1000).getMinutes()
   
   

    return(
        <>
         <h1>{today.name}  </h1>
        <div className='today'>

    
         <h2>{time}</h2>
         <div>
         <img id='icon' src={`http://openweathermap.org/img/wn/${today.weather[0].icon}@4x.png`} alt=''/>
         <h2>{Math.floor(temp)} <sup>o</sup>C</h2>
         </div>
         <p className='description'>{today.weather[0].description}</p>
         <p>temp. odczuwalna:{Math.floor(feels_like)} </p>
         <p>ciśnienie: {pressure} hPa</p>
         <p>wilgotność: {humidity}%</p>
         <p>wiatr: {today.wind.speed} km/h</p>
       <p>wschód słońca: {sunriseHour}:{sunriseMinutes}</p>
       <p>zachód słońca: {sunsetHour}:{sunsetMinutes}</p>
        </div>
   </>
    )
}


export default TodayForecast;
