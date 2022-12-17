import React from 'react'
import './App.css';

import { Routes, } from "react-router-dom";
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import { useState } from 'react'
import TextForm from './components/TextForm';

function App() {
  const [alert, setAlert] = useState(null);
    const showAlert=(message)=>{
        setAlert({
            msg: message
        })
    }
    setTimeout(() => {
      setAlert(null)
    }, 1500)

    return (
      
      <>
        <Navbar title="TextWraps" AboutText="About Us" />
        <Alert alert={alert} />
        <Routes>
          {/* <Route path="/home" element={<Home />} />  */}
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
        <div className="container my-3"  >
                <TextForm showAlert={showAlert} heading="Enter your text to analyze" />
            </div>

      </>
    );

  }

  export default App;
