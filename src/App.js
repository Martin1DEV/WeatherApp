import React, {useContext} from 'react';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Aside from './components/aside/aside'
import { AppContext } from './store/StoreProvider';
import {BrowserRouter as Router} from "react-router-dom";


import  './App.css';




const  App=()=> {

  const{data}=useContext(AppContext)

  return (
    <>
   <Router>
       <Header/>
     <Aside/>
       {data?<Main/>:''}
   </Router>
    </>
    );
  }

export default App;
