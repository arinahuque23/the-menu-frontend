import { basedSliderContent } from '@/shared/type';
import { cn } from '@/shared/utils/cn.utils';
import Image from 'next/image';
import TheMenu from "/public/svg/TheMenu.svg";

type TSliderSyncContentProps = {
  activeIndex: number;
};

const SliderSyncContent: React.FC<TSliderSyncContentProps> = ({ activeIndex }) => {
  return (
    <div>
      <div className='mx-auto w-[327px] h-[135px]'>
        <div className='mb-8 text-center'>
          <h2
            className={cn(
              activeIndex === 0
                ? 'font-bold-disp text-2xl font-bold text-clr-black-01 leading-9'
                : 'mb-3 font-bold-disp text-2xl font-bold text-clr-black-01'
            )}
          >
            {basedSliderContent[activeIndex].title1}
            <br />
            {basedSliderContent[activeIndex].title2}
            {activeIndex === 0 && (
              <div className='mb-3 flex items-center justify-center'>
                <Image src={TheMenu} alt='TheMenu' />
              </div>
            )}
          </h2>
          <p className='h-[60px] font-book-disp text-sm text-clr-brown-4d'>
            {basedSliderContent[activeIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SliderSyncContent;
