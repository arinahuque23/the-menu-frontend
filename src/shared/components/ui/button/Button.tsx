'use client';

import { EButtonType, EButtonVarient } from '@/shared/enum/button.enum';
import { cn } from '@/shared/utils/cn.utils';
import type { ReactElement } from 'react';

interface IButtonProps {
  label?: string;
  variant?: EButtonVarient;
  onClick?: () => void;
  className?: string;
  type?: EButtonType;
  isIconButton?: boolean;
  icon?: ReactElement<any, any>;
  disabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  label,
  variant = EButtonVarient.SOLID,
  onClick,
  className = '',
  type,
  isIconButton = false,
  icon
}) => {
  const baseStyles = 'rounded-[12px] py-[8px] px-6 text-sm leading-[20px] font-medium-disp';
  const variantStyles =
    variant === EButtonVarient.SOLID
      ? 'bg-clr-red-0b text-white leading-[20px]'
      : 'border border-clr-red-0b text-clr-red-0b leading-[20px]';
  return isIconButton === true ? (
    <button
      onClick={onClick}
      type={type ? type : "button"}
      className='flex h-9 w-9 items-center justify-center rounded-[10px] border border-white/15 bg-white/15 backdrop-blur-lg'
    >
      {icon}
    </button>
  ) : (
    <button type={type} onClick={onClick} className={cn(baseStyles, variantStyles, className)}>
      {label}
    </button>
  );
};

export default Button;
