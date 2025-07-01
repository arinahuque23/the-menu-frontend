'use client';

import React from 'react';

interface ITeaxtareaProps {
  name?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Teaxtarea = ({ name = '', label = '', placeholder = '', value, onChange }: ITeaxtareaProps) => {
  return (
    <div className='w-full'>
      {label && (
        <label
          htmlFor={name}
          className='mb-2 block font-roman-disp text-base leading-[22px] text-clr-black-01'
        >
          {label}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className='h-[76px] w-full resize-none rounded-xl border border-clr-white-e6 bg-transparent p-3 font-light-disp text-base text-clr-brown-34 outline-none placeholder:text-clr-brown-34'
      />
    </div>
  );
};

export default Teaxtarea;
