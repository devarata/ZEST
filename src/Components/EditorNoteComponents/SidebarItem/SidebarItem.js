import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeHTMLTags } from '../../../helpers';

class  SidebarItem extends React.Component {

  render() {
    return (
      <h1>SidebarItem Component</h1>
    )
  }
}

export default withStyles(styles)(SidebarItem);
