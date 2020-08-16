import React , {Component} from 'react'
import './EditorNote.css'
import db from '../../../firebase'

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
    <div>MyComponent</div>
  )
}

}

export default EditorNote
