import React, { useState, useEffect } from 'react'
import { createConsumer } from "@rails/actioncable"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const consumer = createConsumer()

function ChatRoom({currentUser}) {

  const [messages, setMessages] = useState([])
  const [messageInput, setMessageInput] = useState('')
  const [channel, setChannel] = useState(null)

  useEffect(() => {
    if (currentUser) {
      fetch('/messages')
      .then(res => res.json())
      .then(messages => setMessages(messages))
      console.log(messages)
    }
  }, [currentUser])
  
  useEffect(() => {
    if (currentUser) {
      const newChannel = consumer.subscriptions.create({ channel: "ChatChannel", room: "Breakfast Club" },
      {
        received: (data) => {
          setMessages(oldMessages => [...oldMessages, data])
        }
      })
      console.log(newChannel)
      setChannel(newChannel)
    }
  }, [currentUser])

  function handleMessageInputChange(e) {
    setMessageInput(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    channel.send({content: messageInput})
    setMessageInput('')
  }

  return (
    <div className="chat">
          
      <h3 id="chatroom"> Chat Room:</h3>
    
      {messages.map((message, i) =>{
        return(
         
          <p key={i} className={(message.user_id == currentUser.id)?"me" : "them"}>{message.content} </p>)}
        )
      } 
    <Box id="input-box"
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <form onSubmit={handleSubmit}>

        {/* <input type="text" value={messageInput} onChange={handleMessageInputChange} /> */}
        <TextField id="text-field" fullWidth label="fullWidth" id="fullWidth" type="text" value={messageInput} onChange={handleMessageInputChange} />
      </form>
      </Box>
    </div>
  )
}

export default ChatRoom