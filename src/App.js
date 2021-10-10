import React, {useContext} from 'react';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Aside from './components/aside/aside';
import Footer from'./components/Footer.jsx';
import { AppContext } from './store/StoreProvider';
import {BrowserRouter as Router} from "react-router-dom";


import  './App.css';




const  App=()=> {

  const{data}=useContext(AppContext)
  const message=(<div className='message'>
  <p>Witamy w naszym serwisie pogodowym. </p>
  <p>Proszę podać nazwę miejscowości.</p>
  </div>
  );
  return (
    <>
   <Router>
       <Header/>
       <div className='wrapper'>
     <Aside/>
       {data?<Main/>:message}
       </div>
       <Footer/>
   </Router>
    </>
    );
  }

export default App;
