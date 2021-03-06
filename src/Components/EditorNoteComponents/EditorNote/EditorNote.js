import React , {Component} from 'react'
import './EditorNote.css'
import db from '../../../firebase'
import Sidebar from '../Sidebar/Sidebar.js'
import Editor from '../Editor/Editor.js'
import firebase from "firebase"

class EditorNote extends Component {

constructor() {
  super();

  this.state = {
    selectedNoteIndex:null,
    selectedNote:null,
    notes: null
  };

  }

componentDidMount = ()=> {
  db.collection('notes').onSnapshot((serverUpdate)=>{
    const notes = serverUpdate.docs.map(doc=>{
      const data = doc.data();
      data['id']=doc.id;
      return data;
    })
    console.log(notes)
    this.setState(
          { notes: notes }
        )
})
  }

selectNote=(note,index)=>{
  this.setState({selectedNoteIndex:index, selectedNote:note})
}

noteUpdate=(id,noteObj)=>{
  db.collection('notes').doc(id).update({
    title: noteObj.title,
    body: noteObj.body,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })
}

deleteNote= async (note)=> {
  const noteIndex = this.state.notes.indexOf(note);
  await this.setState({
    notes: this.state.notes.filter(_note=> _note!==note)
  })
  if(this.state.selectedNoteIndex===noteIndex)
  {
    this.setState({
      selectedNoteIndex:null,
      selectedNote:null,
    })
  }
  else{
    this.state.notes.length>1?this.selectNote(this.state.notes[this.state.selectedNoteIndex-1],this.state.selectedNoteIndex-1):
    this.setState({
      selectedNoteIndex:null,
      selectedNote:null,
    })
  }

  db.collection('notes').doc(note.id).delete();

}



newNote = async(title)=>{
  const note = {
    title:title,
    body:''
  }

  const newFromDB = await db.collection('notes').add({
    title:note.title,
    body:note.body,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })

    const newID = newFromDB.id;
    await this.setState({notes:[...this.state.notes,note]});
    const newNoteIndex = this.state.notes.indexOf(this.state.notes.filter(note=>note.id===newID)[0]);
    this.setState({selectedNote:this.state.notes[newNoteIndex], selectedNoteIndex:newNoteIndex})
}


render(){
  return (
    <div className="app-container">
      <Sidebar selectedNoteIndex={this.state.selectedNoteIndex}
        notes={this.state.notes}
        deleteNote={this.deleteNote}
        selectNote={this.selectNote}
        newNote={this.newNote}
      />
      {
        this.state.selectedNote?
        <Editor selectedNote={this.state.selectedNote} selectedNoteIndex={this.state.selectedNoteIndex} notes={this.state.notes} noteUpdate={this.noteUpdate}/>
        : null
      }
    </div>

  )
}

}

export default EditorNote
