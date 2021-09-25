import React, {createContext, useState} from "react";



export const AppContext=createContext('');


const StoreProvider=({children})=>{


    const [data, setData]=useState('');
    const [today, setToday]=useState('');
    const [city, setCity]=useState('');
    
return (
    <AppContext.Provider value={{
        data,
        setData,
        city,
        setCity,
        today,
        setToday
            } }>
    {children}
    </AppContext.Provider>

    )
}

export default StoreProvider;


