'use client';
import { restaurantsData } from '@/data/restaurant.data';
import Header from '@/modules/home/components/Header';
import { Card } from '@/shared/components/ui';
import SearchInput from '@/shared/components/ui/forms/inputs/SearchInput';
import { animated, useSpring } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';

const MapView = dynamic(() => import('@/modules/map/components/MapView'), {
  ssr: false
});

const HEADER_HEIGHT = 130;
const BOTTOM_OFFSET = 300;

const Map = () => {
  const [{ y }, api] = useSpring(() => ({
    y: 0,
    config: { tension: 180, friction: 30, clamp: true }
  }));

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const snapPointsRef = useRef<number[]>([]);

  const [containerHeight, setContainerHeight] = useState(0);
  const [currentSnap, setCurrentSnap] = useState(1);
  const [canDrag, setCanDrag] = useState(true);
  const [mapHeight, setMapHeight] = useState(0);

  useEffect(() => {
    const updateSnapPoints = () => {
      const vh = window.innerHeight;
      const calculatedMapHeight = vh - BOTTOM_OFFSET;
      const snapPoints = [
        HEADER_HEIGHT,
        HEADER_HEIGHT + calculatedMapHeight
      ];

      snapPointsRef.current = snapPoints;
      setMapHeight(calculatedMapHeight);
      setContainerHeight(vh);
      setCurrentSnap(1);
      api.start({ y: snapPoints[1] });
    };

    updateSnapPoints();
    window.addEventListener('resize', updateSnapPoints);
    return () => window.removeEventListener('resize', updateSnapPoints);
  }, [api]);

  const bind = useDrag(
    ({
      last,
      movement: [, my],
      velocity: [, vy],
      direction: [, dy],
      memo = y.get()
    }) => {
      const snapPoints = snapPointsRef.current;

      if (!canDrag && dy > 0) return memo;

      const newY = memo + my;

      if (last) {
        let targetSnap = snapPoints[1];
        if (vy > 0.2) {
          targetSnap = dy > 0 ? snapPoints[1] : snapPoints[0];
        } else {
          targetSnap = snapPoints.reduce((prev, curr) =>
            Math.abs(curr - newY) < Math.abs(prev - newY) ? curr : prev
          );
        }

        const snapIndex = snapPoints.indexOf(targetSnap);
        setCurrentSnap(snapIndex);
        api.start({ y: targetSnap });
      } else {
        api.start({ y: newY, immediate: true });
      }

      return memo;
    },
    {
      from: () => [0, y.get()],
      bounds: { top: 0, bottom: containerHeight },
      rubberband: true,
      filterTaps: true
    }
  );

  useEffect(() => {
    const el = contentRef.current;

    const handleScroll = () => {
      if (!el) return;
      const atTop = el.scrollTop <= 1;
      setCanDrag(atTop);
    };

    if (el) {
      el.addEventListener('scroll', handleScroll);
      el.addEventListener('touchmove', handleScroll, { passive: true });
    }

    return () => {
      if (el) {
        el.removeEventListener('scroll', handleScroll);
        el.removeEventListener('touchmove', handleScroll);
      }
    };
  }, []);

  return (
    <div className='relative overscroll-contain' ref={containerRef}>
      <div className='container mx-auto sticky top-0 z-50 bg-white'>
        <Header showBackButton />
        <SearchInput />
      </div>

      <div className='relative'>
        <div
          className='absolute z-10 w-full'
          style={{ height: `${mapHeight + 20}px` }}
        >
          <MapView restaurantsData={restaurantsData} yourLocation />
        </div>

        <div className='pointer-events-none fixed inset-0 z-40' />

        <animated.div
          {...bind()}
          style={{
            y,
            top: 0,
            height: `calc(100dvh - ${HEADER_HEIGHT}px)`
          }}
          className={`${currentSnap === 0 ? '' : 'rounded-t-[24px]'
            } fixed left-0 right-0 z-10 flex touch-none flex-col bg-white shadow-xl`}
        >
          <div className='mx-auto mb-4 mt-2 w-[56px] rounded-full bg-[#D0D0D0] py-[2px]' />

          {currentSnap === 0 ? (
            <div></div>
          ) : (
            <div className='flex flex-col items-center justify-center px-4 pb-2 pt-1'>
              <p className='font-semi-bold-disp text-[22px] leading-[30px] text-clr-black-01'>
                All {restaurantsData.length} results
              </p>
              <p className='font-book-disp text-sm leading-[22px] text-clr-red-0b'>Swipe up</p>
            </div>
          )}

          <div
            ref={contentRef}
            onScroll={() => {
              if (contentRef.current) {
                setCanDrag(contentRef.current.scrollTop === 0);
              }
            }}
            className={`${currentSnap === 0
              ? '!overflow-y-scroll scrollbar-hide flex-1'
              : 'overflow-hidden'
              } px-4 pb-6 pt-2`}
          >
            {restaurantsData.map((booking, index) => (
              <Card key={index} {...booking} cardRootClassName='mb-3' />
            ))}
          </div>
        </animated.div>
      </div>
    </div>
  );
};

export default Map;
