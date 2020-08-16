import React  from 'react';
import './App.css';
import Header from './Components/SlackComponents/Header/Header'
import Sidebar from './Components/SlackComponents/Sidebar/Sidebar'
import {Route, BrowserRouter as Router,Switch} from  "react-router-dom"
import Chat from './Components/SlackComponents/Chat/Chat'
import Login from './Components/SlackComponents/Login/Login'
import {useStateValue} from "./StateProvider"

function App() {

  const [{user},dispatch] = useStateValue()

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
