import React from 'react';
import './Header.css';
import {Avatar} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {useStateValue} from '../../../StateProvider.js';
import HomeIcon from '@material-ui/icons/Home';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import NoteIcon from '@material-ui/icons/Note';
import ListAltIcon from '@material-ui/icons/ListAlt';
import {Link } from 'react-router-dom';


function Header() {

  const [{user}] = useStateValue();

  return (
    <div className="header">
        <div className="header__left">
          <Avatar className="header__avatar" src={user?.photoURL} alt={user?.displayName}/>

        </div>
        <div className="header__search">
          <SearchIcon/>
          <input placeholder="Search" className="header__searchbar"/>
        </div>
        <div className="header__right">
        <HelpOutlineIcon/>
        <Link  to="/"><HomeIcon className="header__right__icon"/></Link>
        <Link  to="/zoom"><VideoCallIcon className="header__right__icon"/></Link>
        <Link  to="/evernote"><NoteIcon className="header__right__icon"/></Link>
        <Link  to="/trello"><ListAltIcon className="header__right__icon"/></Link>

        </div>

    </div>
  )
}

export default Header
