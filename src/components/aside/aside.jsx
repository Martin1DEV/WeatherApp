import React  from "react";
import {Link} from "react-router-dom";
import './aside.css'



const Aside=()=>{

   

    
    return(
        
        <nav>
         <Link  to='/today'>Prognoza na dziś</Link><br/>
        <Link  to='/forecast'>Pogoda na 5 dni</Link>
        </nav>
    )
}


export default Aside;

