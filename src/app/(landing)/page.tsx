'use client';
import Image from 'next/image';
import TheMenu from '/public/svg/TheMenu.svg';

import { useEffect, useState } from 'react';

import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';

const HomePage = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!show ? (
        <div className='flex h-[100dvh] items-center justify-center'>
          <Image src={TheMenu} alt='TheMenu' />
        </div>
      ) : null}
      {show && <WelcomeScreen />}
    </>
  );
};

export default HomePage;
