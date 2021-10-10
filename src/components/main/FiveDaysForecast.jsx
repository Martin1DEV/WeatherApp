import React, {useContext} from 'react';
import Day from './Day';
import { AppContext } from '../../store/StoreProvider';


const FiveDaysForecast=()=>{
const {data}=useContext(AppContext);

const city=data.city.name;

const weatherContent= data.list.map(item=><Day key={item.dt} item={item}/>)
console.log(weatherContent)

return(<div>

<h1 className='city'>{city}</h1>
    <div className='main'>
    {weatherContent}

</div>
    </div>
)
}

export default FiveDaysForecast;
