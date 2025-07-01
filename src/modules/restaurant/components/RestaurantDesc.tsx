'use client';
import Title from '@/shared/components/ui/title/Title';
import { useState } from 'react';

const RestaurantDesc = () => {
  const [expanded, setExpanded] = useState(false);

  const fullText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus laoreet odio, ac malesuada nisl viverra vel. Fusce fringilla, nisi et fermentum feugiat, augue sapien tincidunt nisl, non gravida arcu felis ut nisl. Integer sit amet justo et lacus gravida accumsan. Sed id pulvinar turpis.';

  const shortText = fullText.slice(0, 145) + '...';

  return (
    <div className='px-5'>
      <Title
        title='Description'
        titleClassName='text-clr-black-01 font-semi-bold-disp text-[22px]'
        titleRootClassName='pb-2'
      />
      <p className='text-clr-dark-80 font-light-disp text-sm'>
        {expanded ? fullText : shortText}
        {!expanded && (
          <span
            className='ml-1 cursor-pointer text-clr-gray-99 '
            onClick={() => setExpanded(true)}
          >
            Read more
          </span>
        )}
      </p>
    </div>
  );
};

export default RestaurantDesc;
