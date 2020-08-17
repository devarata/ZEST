import React from 'react';
import ReactQuill from 'react-quill';
import debounce from '../../../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';



class Editor extends React.Component {

  constructor() {
    super ();

    this.state={
      text: '',
      title:'',
      id:''
    };

  }

  updateText = async (text)=>{
      await this.setState(
        { text:text }
      )
      this.update();
    }

   update= debounce(()=>{
        this.props.noteUpdate(this.state.id,{
          title: this.state.title,
          body:this.state.text
        })
        }, 10000);

componentDidMount(){
  this.setState({
    text:this.props.selectedNote.body,
    title: this.props.selectedNote.title,
    id: this.props.selectedNote.id
  })
}

componentDidUpdate(){
  if(this.props.selectedNote.id!==this.state.id)
  {
    this.setState({
      text:this.props.selectedNote.body,
      title: this.props.selectedNote.title,
      id: this.props.selectedNote.id
    })
  }
}

  render() {

    const classes = this.props;

    return (
      <div className={classes.editorContainer}>
        <ReactQuill value={this.state.text} onChange={this.updateText}></ReactQuill>
      </div>
    )
  }
}

export default withStyles(styles)(Editor)
