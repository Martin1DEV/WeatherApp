import React,{useContext,useState} from 'react';
import './Header.css'
import { AppContext } from '../../store/StoreProvider';



const Header =()=>{

     const {setData,setToday}=useContext(AppContext);
     const [formCity, setFormCity]=useState('');


     const  handleFormCityChange=(event)=>{
                setFormCity(event.target.value);
             }

     const handleOnClick=(event)=>{

         event.preventDefault();
      

            const apiKey='8963825333539308363a04a28840a3e9';
            const API=`http://api.openweathermap.org/data/2.5/forecast?q=${formCity}&lang=pl&units=metric&appid=${apiKey}`;
            fetch(API)
            .then(response=>{
              
            if(response.ok){
                console.log('jest fetch')
              return response
            }})
            
            .then(response=>response.json())
            .then(data=>{
                
                setData(data)
            })
            .catch(err=>{
                console.log('nie jest ok')
                
            })

            const API2=`http://api.openweathermap.org/data/2.5/weather?q=${formCity}&lang=pl&units=metric&appid=${apiKey}`;
            fetch(API2)
            .then(response=>{
              
            if(response.ok){
                console.log('jest fetch')
              return response
            }})
            
            .then(response=>response.json())
            .then(data=>{
                
                setToday(data)
            })
            .catch(err=>{
                console.log('nie jest ok')
                
            })
        
         setFormCity('');
       
     }


    return(
<>
<header>
   <h1>Pogoda </h1>
    <form onSubmit={handleOnClick}>
    <input placeholder='Podaj nazwę miejscowości' type='text' value={formCity} onChange={handleFormCityChange}/>
    <button type='submit' >Sprawdź pogodę</button>
    </form>
</header>
</>






    )
}


export default Header;
