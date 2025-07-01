import { cn } from '@/shared/utils/cn.utils';
import Link from 'next/link';
import React from 'react';

interface ITitle {
  title?: string;
  name?: string;
  link?: string;
  titleClassName?: string;
  linkClassName?: string;
  titleRootClassName?: string;
  target?: React.HTMLAttributeAnchorTarget;
}
const Title: React.FC<ITitle> = ({
  title,
  link,
  name,
  titleClassName,
  linkClassName,
  titleRootClassName,
  target
}) => {
  return (
    <div className={cn('flex items-center justify-between', titleRootClassName)}>
      <h2 className={cn('font-semi-bold-disp text-[22px] leading-[30px]', titleClassName)}>{title}</h2>
      <Link
        target={target}
        href={link || ''}
        className={cn('font-medium-head text-[15px] leading-5 text-clr-brown-67', linkClassName)}
      >
        {name}
      </Link>
    </div>
  );
};

export default Title;
