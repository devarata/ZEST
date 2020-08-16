import React from 'react'
import './ChatInput.css'


function ChatInput({channelName,channelId}) {

  const sendMessage = (e) =>{
    e.preventDefault()
  }

  return (
    <div className="chatInput">
      <form>
        <input />
        <button type="submit" onClick={sendMessage}>SEND</button>
      </form>
    </div>
  )
}

export default ChatInput
