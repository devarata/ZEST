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

 newNoteBtnClick = () =>{
   this.setState({title: null ,addingNote: !this.state.addingNote})
 }

 updateTitle = (text)=>{
   console.log("text iis here:",text)
 }

  render() {

    const {notes,classes, selectedNoteIndex} = this.props;


    return (
      <div className={classes.sidebarContainer}>
        <Button onClick={this.newNoteBtnClick}
          className={classes.newNoteBtn}>{this.state.addingNote?"Cancel": "New Note"}</Button>
          {
            this.state.addingNote? <div>
              <input
                className={classes.newNoteInput}
                placeholder='Enter note title'
                onKeyUp={(e)=> this.updateTitle(e.target.value)}
                ></input>
            </div> :null
          }
      </div>
    )
  }
}

export default withStyles(styles)(Sidebar)
