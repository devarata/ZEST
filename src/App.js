import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import {Route, BrowserRouter as Router,Switch} from  "react-router-dom"
import Chat from './Components/Chat/Chat'


function App() {
  return (
    <div className="app">
      <Router>
        <Header/>

        <div className="app__body">
          <Sidebar/>

          <Switch>
          <Route path="/room/:roomId">
          <Chat/>

            <h1>Chat Screen</h1>
          </Route>
          <Route path="/">
            <h1>Welcome</h1>
          </Route>
          </Switch>

        </div>
      </Router>



      {/*React Router Chat screen*/}
    </div>
  );


}

export default App;
