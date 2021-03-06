import React from 'react';
import './Header.css';
import {Avatar} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {useStateValue} from '../../StateProvider.js'
//import {actionType} from '../../reducer.js'
import {Link} from 'react-router-dom';


function Header() {

  const [{user}] = useStateValue();

  return (
    <div className="header">
        <div className="header__left">
          <Avatar className="header__avatar" src={user?.photoURL} alt={user?.displayName}/>
          <AccessTimeIcon/>
        </div>
        <div className="header__search">
          <SearchIcon/>
          <input placeholder="Search" className="header__searchbar"/>
        </div>
        <div className="header__right">
        <HelpOutlineIcon/>
        </div>
    </div>
  )
}

export default Header
