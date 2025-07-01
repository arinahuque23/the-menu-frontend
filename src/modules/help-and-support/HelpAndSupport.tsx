'use client';
import { useState } from 'react';

import Conversation from '@/modules/help-and-support/components/Conversation';
import HelpInput from '@/modules/help-and-support/components/HelpInput';
import Header from '@/modules/home/components/Header';

const HelpAndSupport = () => {
  const [conversation, setConversation] = useState<{ from: 'user' | 'bot'; message: string }[]>([]);

  const handleSend = (message: string) => {
    if (message.trim()) {
      setConversation((prev) => [...prev, { from: 'user', message }]);

      setTimeout(() => {
        setConversation((prev) => [...prev, { from: 'bot', message: generateReply(message) }]);
      }, 1000);
    }
  };

  const generateReply = (msg: string) => {
    return "Thanks for your message! We'll get back to you shortly.";
  };

  return (
    <div className='container flex h-[100dvh] flex-col'>
      <Header showBackButton />
      <div className='scrollbar-hide flex-1 overflow-y-auto'>
        {conversation.length > 0 ? (
          <Conversation messages={conversation} />
        ) : (
          <div className='flex h-full flex-col items-center justify-center gap-1'>
            <p className='leading-6 text-clr-black-01'>Hello Leonardo!</p>
            <p className='font-medium-disp text-2xl leading-8 text-clr-black-01'>What can we help you?</p>
          </div>
        )}
      </div>

      <HelpInput onSend={handleSend} />
    </div>
  );
};

export default HelpAndSupport;
