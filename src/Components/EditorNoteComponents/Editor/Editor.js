import React from 'react';
import ReactQuill from 'react-quill';
import debounce from '../../../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';



class Editor extends React.Component {

  constructor() {
    super ();
  }

  render() {
    return (
      <div>
        <h1>Editor</h1>
      </div>
    )
  }
}

export default withStyles(styles)(Editor)
