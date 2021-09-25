import React, {useContext} from 'react';
import { AppContext } from '../../store/StoreProvider';



const TodayForecast=()=>{

    const {today}=useContext(AppContext);
    console.log(today)



    return(
        <>
        <h1>{today.name}  </h1>
    
<p>today</p>
 <img id='icon' src={`http://openweathermap.org/img/wn/${today.weather[0].icon}@2x.png`} alt=''/>
   </>
    )
}


export default TodayForecast;
