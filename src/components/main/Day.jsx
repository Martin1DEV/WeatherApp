import React from 'react';
import './day.css';





const Day=({item})=>{

const{temp, feels_like, pressure, humidity}=item.main;
   
    return (
<div className='day'>

        <h3>{item.dt_txt.slice(5, 16)}</h3>
        <div>
        <img id='icon' src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt=''/>
        <h2>{Math.floor(temp)} <sup>o</sup>C</h2>
        </div>
        <p>{item.weather[0].description}</p>
        <p>temp. odczuwalna:{Math.floor(feels_like)} </p>
        <p>ciśnienie: {pressure} hPa</p>
        <p>wilgotność: {humidity}%</p>
        <p>wiatr: {item.wind.speed} km/h</p>
      

        
</div>

    )
}


export default Day;