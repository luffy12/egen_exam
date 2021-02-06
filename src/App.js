
import './App.css';
import React, { useState,useEffect } from 'react';
import { Route, Switch, BrowserRouter ,Link} from "react-router-dom";
import Home from './Home';
import Job from './Job';
// import {Theme}
import JobDetail from './JobDetail';


function App(props) {
  const [darkMode, setDarkMode] = useState("light-mode");

  return (
    <BrowserRouter>
    <div className={darkMode ? "dark-mode" : "light-mode"}>
    <nav style={{display:"inline-block",width:"100%",borderRadius: "0px 0px 0px 50px", position:"relative"}}>
      <Link to='/'>
      <h4 style={{float:"left",color:"white"}}>
        Dev Jobs
      </h4>
      </Link>
      
        <div className="toggle-container" style={{float:"right"}}>
          <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
          <span className="toggle">
            <input
              checked={darkMode}
              onChange={() => setDarkMode((prevMode) => !prevMode)}
              id="checkbox"
              className="checkbox"
              type="checkbox"
            />
            <label htmlFor="checkbox" />
          </span>
          <span style={{ color: darkMode ? "slateblue" : "grey" }}>☾</span>
        </div>
      </nav>
      <Switch>
        <Route exact path="/"  render={(props)=><Home {...props} darkMode={darkMode}  />}  />
        <Route exact path="/job/:id"  render={(props)=><JobDetail {...props} darkMode={darkMode}  />}/>
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
