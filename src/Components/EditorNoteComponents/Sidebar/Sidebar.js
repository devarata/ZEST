import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItem from '../SidebarItem/SidebarItem';


class Sidebar extends React.Component{

  constructor() {
   super();
   this.state = {
     addingNote: false,
     title: null
   };
 }

  render() {
    return (
      <div>
        <h1>Sidebar Component</h1>
      </div>
    )
  }
}

export default withStyles(styles)(Sidebar)
