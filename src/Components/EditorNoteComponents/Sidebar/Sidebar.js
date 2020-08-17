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
   this.setState({title: text})
 }

newNote=()=>{
  console.log(this.state)
}


selectNote=(note,index)=>{
  this.props.selectNote(note,index)
}

deleteNote=()=>{
  console.log('delete note')
}

  render() {

    const {notes,classes, selectedNoteIndex} = this.props;

    if(notes)
    {
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
                  <Button className={classes.newNoteSubmitBtn}
                    onClick={this.newNote}>Submit Note</Button>
              </div> :null
            }
            <List>
              {
                notes.map((note,index)=>{
                  return(
                    <div key={index}>
                      <SidebarItem note={note} index={index} selectedNoteIndex={selectedNoteIndex} selectNote={this.selectNote}/>
                      <Divider/>
                    </div>
                  )
                })
              }
            </List>
        </div>
      )
    }
    else{
      return(<div></div>)
    }

  }
}

export default withStyles(styles)(Sidebar)
