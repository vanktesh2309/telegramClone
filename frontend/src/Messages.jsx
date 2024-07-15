import React, { useEffect, useMemo, useState } from 'react';

import { Link, useLocation } from 'react-router-dom';
import useGetData from './getDataHook';

function Messages({ messageCollection}) {
  
  const location = useLocation()

  const defaultUser = useMemo(()=>{
    return  {
      "2309": {
        messages: ["Hi there! My name is Vanktesh Pandey\nWelcome to my Telegram clone.\nKindly give me your feedback about my work."],
       sender:{id: 2309,
       sender_id: 2309,
       name: "Vanktesh Pandey",
       role_id: 9,
       unanswered: 0,
       vote: null,
       chat_id: 3888,
       action_id: null,
       is_corrected: 0,
       created_at: "2024-07-04T09:41:48.000000Z",
       updated_at: "2024-07-04T09:41:48.000000Z",
       sender: {
         id: 1,
         name: "Vanktesh Pandey",
         email: "venktesh.pandey.abc@gmail.com",
         phone: null,
         email_verified_at: null,
         password_updated: 0,
         created_at: null,
         updated_at: "2023-04-26T12:43:24.000000Z",
         device: null,
         browser: null,
         os: null,
         city: null,
         country: null
       }}
     }
     }
  },[]);
const url = 'https://devapi.beyondchats.com/api/get_chat_messages?chat_id=3888'
  // State to store the collection of messages passed from the parent component
  const [messages, setMessages] = useState(messageCollection);
  const [user, setUser] = useState(defaultUser[2309]);

  const groupedMessages = useGetData(url)

  
  
  useEffect(()=>{
    console.log("REndring")

    const userObject = {...defaultUser,...groupedMessages}
    console.log("userObject",userObject)
    const fragment = window.location.hash.replace(/^#/, '');
    console.log("userObject",fragment)
    const selectedUser = Object.values(userObject).find(user => user.sender.id === parseInt(fragment, 10));
    setUser(selectedUser ); // Update user state
  },[groupedMessages,defaultUser,location])
  
  console.log("user",user)
  
  // Update the messages state whenever the messageCollection prop changes
  useEffect(() => {
    setMessages(messageCollection);
  }, [messageCollection]);
  
  return (
    <div className='flex overflow-scroll h-5/6 scrollable-section flex-col'>
      {/* User profile section */}
      <div className='flex items-center h-14 bg-[rgb(33,33,33)]'>
      <Link to={"/"}><img src="/back.svg" alt="back" className={`h-8 ml-8 mr-2 md:sr-only`} /></Link>
        <img src="/logo512.png" className='h-11 ml-6 rounded-full border' alt="profile" />
        <div>
          {/* <h2 className='text-lg font-semibold ml-2'>{!user.sender.name?"Unknown":user.sender.name}</h2> */}
          <h2 className='mb-1 text-sm text-[rgb(174,174,174)] font-semibold ml-2'>last seen a long time ago</h2>
        </div>
      </div>
      {/* Received message display */}
      <div className="messageRecive content-center lg:pl-[0px] mt-2 flex flex-col space-y-2 items-center justify-start">
        
          {user?.messages.map(messages=>(
        <div className='messageBoxRecive p-2'>
            <p className=''>{messages}</p>
        </div>
          ))}
      </div>
      {/* Sent messages display */}
      {messages.map((sendMessage, index) => (
        <div key={sendMessage.id} className="messageSend content-center lg:pr-[136px] flex items-center justify-end">
          <div className='messageBoxSend flex flex-col mt-2 p-2'>
            <p className=''>{sendMessage.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Messages;
