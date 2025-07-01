import { Button } from "@/shared/components/ui";
import { EButtonVarient } from "@/shared/enum/button.enum";

const RestaurantFinde = () => {
  return (
    <>
      <div className='bg-no-repeat bg-center bg-cover py-5 px-4 w-full object-cover mb-5 rounded-2xl' style={{ backgroundImage: `url(/svg/BottomBanner.svg)`, objectFit: "cover" }}>
        <h2 className='mb-4 font-bold-disp text-[28px] leading-8 text-white'>
          We will help you find <br /> a restaurant
        </h2>
        <Button
          label='Find Now'
          variant={EButtonVarient.OUTLINE}
          className='rounded-[16px] border-none bg-white px-6 py-2 text-sm font-medium-disp text-clr-red-0b'
        />
      </div>
    </>
  );
};

export default RestaurantFinde;
