import React, { useEffect, useState } from 'react';
import './App.css';
import { Outlet, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useGetData from './getDataHook';

function App() {
  // State to hold the fetched message data
  const [messageRoute, setMessageRoute] = useState(false)
  
const url = 'https://devapi.beyondchats.com/api/get_chat_messages?chat_id=3888'
  // reducer function
  const groupedMessages = useGetData(url)
  

  



  const location = useLocation()
  // useEffect to fetch message data on component mount
  useEffect(() => {
    if(location.pathname === '/messgaeId/'){
      setMessageRoute(true)
    }else{
      setMessageRoute(false)
    }
    // IIFE to fetch data
    
  }, [location.pathname]);
  

  return (
    <main className="layout ">
      {/* Sidebar section */}
      <section className={`overflow-scroll scrollable-section layout-side ${messageRoute? "display":''}`}>
        {/* Search bar */}
        <div className='flex'>
          <img src="/search.svg" className='mt-5 ml-6 h-6' alt="menu" />
          <div className='flex mt-2 ml-6 search rounded-full'>
            <img src="/search.png" className='mt-2 ml-2 h-6' alt="search icon" />
            <input type="text" placeholder='Search' className='ml-6 w-48 rounded-full search-inp' />
          </div>
        </div>

        {/* Static link to a specific user */}
        <Link to={`messgaeId/#${2309}`} className='flex ml-2 p-2 mt-7 m-1 message'>
          <img src="/logo512.png" alt="profile" className='h-14 rounded-full' />
          <div>
            <p className='ml-2'>Vanktesh Pandey</p>
            <p className='ml-2 mt-1'>New message</p>
          </div>
        </Link>

        {/* Dynamic links generated from message data */}
        {Object.values(groupedMessages).map(message => (
          <Link to={`messgaeId/#${message.sender.id}`} key={message.sender.id} className='flex ml-2 p-2 mt-1 m-1 message'>
            <img src="/logo512.png" alt="profile" className='h-14 rounded-full' />
            <div>
              <p className='ml-2'>{message.sender.name === null ? "Unknown":message.sender.name}</p>
              <p className='ml-2 mt-1'>New message</p>
            </div>
          </Link>
        ))}
      </section>

      {/* Main content section */}
      <section className={`overflow-scroll scrollable-section layout-main ${messageRoute? "":'display'}`}>
        <Outlet groupedMessages={groupedMessages} />
      </section>
    </main>
  );
}

export default App;
