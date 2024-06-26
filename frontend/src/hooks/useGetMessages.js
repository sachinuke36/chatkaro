import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';
import useConversation from '../zustand/useConversation';

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { url } = useAuthContext();
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      if (!selectedConversation?._id) return;

      try {
        setLoading(true);
        const res = await fetch(url + 'api/messages/' + selectedConversation._id, {
          method: 'GET',
          credentials: 'include',
        });

        const data = await res.json();
        if (data) {
          setMessages(data.messages);
        } else {
          toast.error('Failed to load messages');
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getMessages();
  }, [selectedConversation?._id, setMessages, url]);

  return { messages, loading };
};

export default useGetMessages;
