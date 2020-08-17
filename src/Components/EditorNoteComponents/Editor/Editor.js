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
          console.log('updating database')
        }, 10000);


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
