import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Import uuid for generating unique IDs
import Messages from './Messages';

function SendMessage() {
  // State to hold the array of messages
  const [messageArray, setMessageArray] = useState([
    {
      id: '1212',
      message: 'Hello!\nNice to meet you',
    },
  ]);

  // State to hold the current message input
  const [message, setMessage] = useState('');

  // Function to handle the form submission
  function handleSubmit(e) {
    e.preventDefault(); // Prevent default form submission
    if (message.trim() !== '') {
      // Create a new message object with a unique ID
      const newMessage = {
        id: uuidv4(),
        message: message,
      };
      // Update the message array with the new message
      setMessageArray((prevMessages) => [...prevMessages, newMessage]);
      setMessage(''); // Clear the input field after submitting
    } else {
      console.log('Message cannot be empty');
    }
  }

  return (
    <>
      {/* Render the Messages component and pass the message array as a prop */}
      <Messages messageCollection={messageArray} />
      <form onSubmit={handleSubmit} className='flex w-full items-end justify-center p-3'>
        <div className='absolute bottom-5 space-x-3'>
          <input
            type='text'
            value={message} // Bind the input value to the message state
            onChange={(e) => setMessage(e.target.value)} // Update the message state on input change
            placeholder='Message'
            className='lg:min-w-[550px] lg:max-w-[600px] h-14 bg-[#212121] rounded-xl p-2'
          />
          <button type="submit" className='bg-[#212121] relative left-0 top-2 rounded-full p-2 right-[11%]'>
            <img src='/send.svg' className='h-9' alt='send' />
          </button>
        </div>
      </form>
    </>
  );
}

export default SendMessage;
