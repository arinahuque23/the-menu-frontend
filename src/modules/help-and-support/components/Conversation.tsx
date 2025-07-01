import Image from 'next/image';
import { useEffect, useRef } from 'react';
import receiver from '/public/images/receiver.png';

const Conversation = ({ messages }: { messages: { from: 'user' | 'bot'; message: string }[] }) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className='flex flex-col gap-5'>
      {messages.map((msg, index) =>
        msg.from === 'user' ? (
          <div key={index} className='ml-auto max-w-[300px] rounded-t-lg rounded-bl-lg bg-clr-red-0b p-3'>
            <p className='font-book-disp text-sm text-white'>{msg.message}</p>
          </div>
        ) : (
          <div key={index} className='receiverText flex items-start gap-2'>
            <div className='size-6 overflow-hidden rounded-full'>
              <Image src={receiver} alt='receiver' className='object-cover' />
            </div>
            <div className='max-w-[280px] rounded-b-lg rounded-tr-lg bg-clr-white-f5 p-3'>
              <p className='font-book-disp text-sm text-clr-brown-34'>{msg.message}</p>
            </div>
          </div>
        )
      )}
      <div ref={bottomRef} />
    </div>
  );
};

export default Conversation;
