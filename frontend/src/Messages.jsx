import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation,Link } from 'react-router-dom';

function Messages({ messageCollection }) {
  const location = useLocation();

  // State to store the collection of messages passed from the parent component
  const [messages, setMessages] = useState(messageCollection);

  // Default user message data in case no message is found
  const defaultUser = {
    id: 14021,
    sender_id: 2309,
    role_id: 9,
    message: "Hi there! My name is Vanktesh Pandey\nWelcome to my Telegram clone.\nKindly give me your feedback about my work.",
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
    }
  };

  // State to store the fetched message data from the API
  const [messageData, setMessageData] = useState([defaultUser]);

  // State to store the current user data
  const [user, setUser] = useState(defaultUser);

  // Fetch message data from the API when the component mounts or location hash changes
  useEffect(() => {
    const getData = async () => {
      try {
        // Fetch data from the API
        const response = await axios.get('https://devapi.beyondchats.com/api/get_chat_messages?chat_id=3888');
        setMessageData(response.data.data); // Update message data state
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    getData();
    console.log("rendring")

    // Extract the fragment from the URL and use it to find the corresponding user
    const fragment = window.location.hash.replace(/^#/, '');
    const selectedUser = messageData.find(user => user.id === parseInt(fragment, 10));
    setUser(selectedUser || defaultUser); // Update user state
  }, [location.hash,]);

  // Update the messages state whenever the messageCollection prop changes
  useEffect(() => {
    setMessages(messageCollection);
  }, [messageCollection]);

  return (
    <div className='flex flex-col'>
      {/* User profile section */}
      <div className='flex items-center h-14 bg-[rgb(33,33,33)]'>
      <Link to={"/"}><img src="/back.svg" alt="back" className={`h-8 ml-8 mr-2 md:sr-only`} /></Link>
        <img src="/logo512.png" className='h-11 ml-6 rounded-full border' alt="profile" />
        <div>
          <h2 className='text-lg font-semibold ml-2'>{user.sender.name || "Temp"}</h2>
          <h2 className='mb-1 text-sm text-[rgb(174,174,174)] font-semibold ml-2'>last seen a long time ago</h2>
        </div>
      </div>
      {/* Received message display */}
      <div className="messageRecive content-center lg:pl-[136px] mt-2 flex items-center justify-start">
        <div className='messageBoxRecive p-2'>
          <p className=''>{user.message}</p>
        </div>
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
