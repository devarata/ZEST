import React  from 'react';
import './App.css';
import Header from './Components/SlackComponents/Header/Header'
import Sidebar from './Components/SlackComponents/Sidebar/Sidebar'
import {Route, BrowserRouter as Router,Switch} from  "react-router-dom"
import Chat from './Components/SlackComponents/Chat/Chat'
import Login from './Components/SlackComponents/Login/Login'
import {useStateValue} from "./StateProvider"
import EditorNote from './Components/EditorNoteComponents/EditorNote/EditorNote'
import Trello from './Components/TrelloComponents/Trello/Trello.js'

function App() {
  const [{user},dispatch] = useStateValue()

  return (
    <div className="app">
      <Router>
        {
          !user?(<Login/>): (
            <>
            <Trello/>
            </>
          )
        }


      </Router>
    </div>
  );


}

export default App;
