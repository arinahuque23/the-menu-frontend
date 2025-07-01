'use client';
import Image from 'next/image';

import { menusData, menuTabsData } from '@/data/menus.data';

const MenusCard = () => {
  return (
    <div>
      <div className='scrollbar-hide mb-3 flex w-full gap-2 overflow-x-scroll whitespace-nowrap'>
        {menuTabsData.map((item, index) => (
          <button
            key={`menu_card_tabs_${index}`}
            className='rounded-full border border-clr-white-f5 bg-white px-3 py-2 font-light-disp text-sm text-clr-brown-34 hover:bg-clr-white-fa'
          >
            {item.item}
          </button>
        ))}
      </div>
      <div className='grid grid-cols-2 gap-2'>
        {menusData.map((item, index) => (
          <div key={`menu_card_${index}`} className='group relative h-48 overflow-hidden rounded-xl'>
            <Image
              src={item.img}
              alt={item.itemName}
              fill
              className='object-cover transition-transform duration-300 group-hover:scale-105'
            />
            <div className='gradient absolute inset-0 top-[120px]'></div>
            <div className='absolute bottom-4 left-2 text-white'>
              <h3 className='mb-1 font-semi-bold-disp text-sm'>{item.itemName}</h3>
              <button className='rounded-full border border-white/15 bg-clr-dark-14 px-3 py-1 font-medium-disp text-xs text-white backdrop-blur-lg'>
                ${item.price.toFixed(2)}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenusCard;
