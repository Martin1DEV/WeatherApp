import React, {useContext} from 'react';
import Day from './Day';
import { AppContext } from '../../store/StoreProvider';


const FiveDaysForecast=()=>{
const {data}=useContext(AppContext);

const city=data.city.name;

const weatherContent= data.list.map(item=><Day key={item.dt} item={item}/>)
console.log(weatherContent)

return(
    <div className='main'>
<p className='city'>{city}</p>
    {weatherContent}

    </div>
)
}

export default FiveDaysForecast;
