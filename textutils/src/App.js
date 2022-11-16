
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import Alert from './components/Alert';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const[mode,Setmode]=useState('light')
  const[alert,Setalert]=useState(null);
  const showalert=(message,type)=>{
       Setalert({
        msg : message,
        type : type

       })
       setTimeout(() => {
        Setalert(null);
        
       }, 1000);
  }

  const Darkmode=()=>{
    if(mode==='light'){
      Setmode('dark')
      document.body.style.backgroundColor = '#000'
     showalert("Dark mode enabled","success")
    }else{
      Setmode('light')
      document.body.style.backgroundColor = 'white'
      showalert("Light mode enabled","success")
    }
  }
 
  return (
    <>
    <Router>
      <Navbar title = "TextUtils" aboutText="More about textutils" mode={mode} Darkmode={Darkmode}/>
      <Alert alert={alert}/>
      <div className="container">
      <Routes>
          <Route path="/about" element={<About mode={mode}/>}>
          </Route>
          <Route path="/" element={ <TextForm heading = "Enter Your Text To Analyze" mode={mode} showalert={showalert} />}>
         
          </Route>
        </Routes>
     
      
      </div>
      </Router>
    </>
  );
}

export default App;
