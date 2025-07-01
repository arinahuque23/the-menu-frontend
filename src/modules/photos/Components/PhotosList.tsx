'use client';

import { imageGrid } from '@/data/photoslist.data';
import CloseIcon from '@/icons/CloseIcon';
import { useEffect, useRef, useState } from 'react';
import { ColumnsPhotoAlbum } from 'react-photo-album';
import { FreeMode, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'react-photo-album/columns.css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/keyboard';

const PhotosList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [videoCovers, setVideoCovers] = useState<Record<number, string>>({});
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current || document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    imageGrid.forEach((item, index) => {
      if (item.type === 'video') {
        const video = document.createElement('video');
        video.src = item.small;
        video.crossOrigin = 'anonymous';
        video.muted = true;

        video.onloadeddata = () => {
          video.currentTime = Math.min(0.5, video.duration || 0.5);
        };

        video.onseeked = () => {
          if (ctx) {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            const cover = canvas.toDataURL('image/jpeg');
            setVideoCovers((prev) => ({ ...prev, [index]: cover }));
          }
        };
      }
    });
  }, []);


  const photos = imageGrid.map((item, index) => ({
    src: item.type === 'video' ? videoCovers[index] || '' : item.small,
    width: item.width,
    height: item.height,
    key: `${index}`,
    type: item.type,
    realIndex: index,
  }));

  return (
    <div className="relative mb-5">
      <canvas ref={canvasRef} className="hidden" />

      <ColumnsPhotoAlbum
        photos={photos as any}
        columns={3}
        spacing={8}
        padding={0}
        onClick={({ index }) => {
          setActiveIndex(index);
          setIsOpen(true);
        }}
      />

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#09080A] flex items-center justify-center">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute left-5 top-4 z-50 p-2 text-white"
          >
            <CloseIcon fill="white" />
          </button>

          <Swiper
            modules={[Keyboard, FreeMode]}
            initialSlide={activeIndex}
            slidesPerView={1}
            centeredSlides
            keyboard={{ enabled: true }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
            {imageGrid.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="h-[474px]">
                  {item.type === 'video' ? (
                    <video
                      src={item.large}
                      controls
                      autoPlay={index === activeIndex}
                      className="h-full w-full "
                      playsInline
                    />
                  ) : (
                    <img
                      src={item.large}
                      alt={`slide-${index}`}
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default PhotosList;
