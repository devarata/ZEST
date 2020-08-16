import React , {useState} from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import {Route, BrowserRouter as Router,Switch} from  "react-router-dom"
import Chat from './Components/Chat/Chat'


function App() {

  const [user,setUser]=useState(null);


  return (
    <div className="app">
      <Router>
        {
          !user?(<Login/>): (
            <>
            <Header/>
            <div className="app__body">
              <Sidebar/>

              <Switch>
              <Route path="/room/:roomId">
              <Chat/>
              </Route>
              <Route path="/">
                <h1>Welcome</h1>
              </Route>
              </Switch>

            </div>
            </>
          )
        }


      </Router>
    </div>
  );


}

export default App;
