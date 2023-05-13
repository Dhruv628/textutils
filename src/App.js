
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('white')
  const [textcolor, setTextcolor] = useState('black')
  const [themode, setThemode] = useState('Enable Dark mode')
  const [alert, setAlert] = useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1100);

  }
  
  const toggleMode=()=>{
    if(mode==='black'){
       
      setMode('white')
      setTextcolor('black')
      setThemode('Enable Dark mode')
      document.body.style.backgroundColor='white'
      document.getElementById('message').style.backgroundColor='white'
      document.getElementById('message').style.color='black'
      showAlert('Light mode has been enabled','Success')
      document.title='TextUtils - Light Mode'

      
    }
    else{
     
      setMode('black')
      setTextcolor('white')
      setThemode('Enable Light mode')
      document.body.style.backgroundColor='#8a8f99'
      document.getElementById('message').style.backgroundColor='#8a8f99'
      document.getElementById('message').style.color='white'
      showAlert('Dark mode has been enabled','Success')
      document.title='TextUtils - Dark Mode'
      // setInterval(() => {
      //   document.title='TextUtils is amazing'
      // }, 1500);   
      // setInterval(() => {
      //   document.title='Install TextUtils now'
      // }, 2000);   
    }
  }
  return (
   <>

<Router>

<Navbar title="TextUtils" mode={mode} textcolor={textcolor} toggleMode={toggleMode} themode={themode}/>
<Alert alert={alert}/>
<Routes>   
          <Route exact path="/about" element={<About  mode={mode} textcolor={textcolor} toggleMode={toggleMode}/>}/>
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} textcolor={textcolor} toggleMode={toggleMode}/>} />
        </Routes>
          
</Router>

</>
  );
}

export default App;