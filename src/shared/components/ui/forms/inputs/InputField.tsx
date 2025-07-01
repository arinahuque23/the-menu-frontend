'use client';
import React from 'react';

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  className = ''
}) => {
  return (
    <div className='w-full'>
      <label htmlFor={name} className='mb-2 block font-roman-disp text-base leading-[22px] text-clr-black-01'>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full rounded-xl border border-clr-white-e6 p-3 font-light-disp text-base text-clr-brown-34 outline-none placeholder:text-clr-brown-34 ${className}`}
      />
    </div>
  );
};

export default InputField;
