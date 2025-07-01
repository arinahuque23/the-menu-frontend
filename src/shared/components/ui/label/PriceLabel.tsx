'use client';
import React from 'react';

import { ECurrencyType } from '@/shared/enum/currency.enum';

interface IPriceLabelProps {
  price: number | null | undefined;
  currency?: ECurrencyType;
}

export const PriceLabel: React.FC<IPriceLabelProps> = ({ price, currency = ECurrencyType.USD }) => {
  return (
    <>
      {currency === ECurrencyType.USD && '$'}
      {price}
    </>
  );
};
