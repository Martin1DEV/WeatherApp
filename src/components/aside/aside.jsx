import React, {useState}  from "react";
import {Link} from "react-router-dom";



const Aside=()=>{

    const[isMain, setIsMain]=useState(false);
    const toggleLink=()=>{
        setIsMain(!isMain)
    }

    const content=isMain?<Link onClick={toggleLink} to=''>Prognoza na dziś</Link>:<Link  onClick={toggleLink} to='/forecast'>Pogoda na 5 dni</Link>;

    return(
        
        <nav>
        {content}
        </nav>
    )
}


export default Aside;

