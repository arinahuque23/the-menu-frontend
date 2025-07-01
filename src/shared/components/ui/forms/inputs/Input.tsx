'use client';

import OpenEyeIcon from '@/icons/OpenEyeIcon';
import { useRef, useState } from 'react';
import { FaRegEyeSlash } from 'react-icons/fa';
import { EInputType } from './../../../../enum/teaxtarea.enum';

interface IInputProps {
  type?: EInputType;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  codeLength?: number;
  label?: string;
}

const Input = ({
  type = EInputType.TEXT,
  placeholder = '',
  value = '',
  onChange = () => { },
  codeLength = 6,
  label = ''
}: IInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = type === EInputType.PASSWORD || type === EInputType.REPASSWORD;
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleChange = (index: number, char: string) => {
    if (char.length > 1) return;

    const newCode = value.split('');
    newCode[index] = char;
    const updatedCode = newCode.join('');
    onChange(updatedCode);

    if (char && index < codeLength - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !value[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  if (type === EInputType.CODE) {
    return (
      <div className='flex flex-col rounded-2xl border border-gray-300 px-3 py-2'>
        <label className='font-black-body-normal text-xs text-clr-gray-99'>{label}</label>
        <div className='flex items-center gap-5'>
          {Array.from({ length: codeLength }).map((_, index) => (
            <input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el!;
              }}
              type={EInputType.CODE}
              inputMode='numeric'
              maxLength={1}
              className='h-6 w-6 rounded-t border-b-2 border-clr-gray-d9 text-center outline-none text-base'
              value={value[index] || ''}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className='border-[rgba(18, 0, 1, 0.10)] flex items-center gap-1 rounded-2xl border px-3 py-2'>
      <div className='w-full'>
        <label
          htmlFor={label}
          className='mb-1 block   font-black-body-normal text-xs text-clr-gray-99'
        >
          {label}
        </label>
        <input
          type={isPasswordField && showPassword ? EInputType.TEXT : type}
          id={label}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className='w-full bg-transparent font-book-disp leading-[24px] text-base text-clr-brown-4d outline-none placeholder:text-clr-brown-4d'
        />
      </div>
      {isPasswordField && (
        <button
          type='button'
          onClick={() => setShowPassword((prev) => !prev)}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? (
            <FaRegEyeSlash className='text-2xl text-clr-brown-34' />
          ) : (
            <OpenEyeIcon fill='#413334' />
          )}
        </button>
      )}
    </div>
  );
};

export default Input;
