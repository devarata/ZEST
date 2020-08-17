import React , {Component} from 'react'
import './EditorNote.css'
import db from '../../../firebase'
import Sidebar from '../Sidebar/Sidebar.js'
import Editor from '../Editor/Editor.js'

class EditorNote extends Component {

constructor() {
  super();

  this.state = {
    selectedNoteIndex:null,
    selectedNote:null,
    notes: null
  };

  }

componentDidMount() {
  db.collection('notes').onSnapshot((notesUpdate)=>{
    const notes = notesUpdate.docs.map(doc=>{
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

render(){
  return (
    <div className="editor_main_container">
      <Sidebar selectedNoteIndex={this.state.selectedNoteIndex}
        notes={this.state.notes}
      />
      <Editor/>
    </div>

  )
}

}

export default EditorNote
