import AddIcon from '@/icons/AddIcon';
import SendIcon from '@/icons/SendIcon';
import { useState } from 'react';

const HelpInput = ({ onSend }: { onSend: (msg: string) => void }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className='flex items-center gap-2  pb-4 pt-5'>
      <button className='flex size-[52px] flex-shrink-0 items-center justify-center rounded-[20px] bg-clr-white-f5'>
        <AddIcon />
      </button>
      <div className='flex w-full items-center rounded-[40px] bg-clr-white-f5 p-0.5 backdrop-blur-lg'>
        <input
          type='text'
          className='w-full bg-transparent px-2 outline-none text-base'
          placeholder='Ask your questions.....'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button
          className='flex size-12 flex-shrink-0 items-center justify-center rounded-full bg-clr-red-0b'
          onClick={handleSend}
        >
          <SendIcon />
        </button>
      </div>
    </div>
  );
};

export default HelpInput;
