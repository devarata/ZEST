import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'


function App() {
  return (
    <div className="app">
      <Header/>
      <div className="app__body">
        <Sidebar/>
      </div>


      {/*React Router Chat screen*/}
    </div>
  );


}

export default App;
