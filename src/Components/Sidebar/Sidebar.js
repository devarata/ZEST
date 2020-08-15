import React from 'react'
import './Sidebar.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from '../SidebarOption/SidebarOption'
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add'

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>ZEST Development</h2>
          <h3>
            <FiberManualRecordIcon/>
            Devarata Oza
          </h3>
        </div>
        <CreateIcon/>
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
      <SidebarOption Icon={AlternateEmailIcon} title="Mentions and reactions"/>
      <SidebarOption Icon={DraftsIcon} title="Saved Items"/>
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser"/>
      <SidebarOption Icon={PeopleAltIcon} title="People & user groups"/>
      <SidebarOption Icon={AppsIcon} title="Apps"/>
      <SidebarOption Icon={FileCopyIcon} title="File browser"/>
      <SidebarOption Icon={ExpandLessIcon} title="Show less"/>
      <hr/>
      <SidebarOption Icon={ExpandMoreIcon} title="Channels"/>
      <hr/>
      <SidebarOption Icon={AddIcon} title="Add Channel"/>
    </div>
  )
}

export default Sidebar
