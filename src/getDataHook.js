import {useState,useEffect,useMemo} from 'react'
import axios from 'axios';

function useGetData(url) {
    const [messageData, setMessageData] = useState([]);
    useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get(url);
            setMessageData(response.data.data);
          } catch (error) {
            console.error("Error fetching messages:", error);
          }
        }
    
        fetchData();
      }, [url]); // Ensure it runs once on component mount
    
      const groupedMessages = useMemo(() => {
        if (!messageData) return []; // Handle initial loading state or no data
    
        return messageData.reduce((acc, message) => {
          const senderId = message.sender.id;
          if (!acc[senderId]) {
            acc[senderId] = {
              sender: message.sender,
              messages: []
            };
          }
          acc[senderId].messages.push(message.message);
          return acc;
        }, {});
      }, [messageData]); 
      return groupedMessages
}

export default useGetData
