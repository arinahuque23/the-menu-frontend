import type { StaticImageData } from 'next/image';

export type TBasedSliderContentItem = {
  sliderImage: string | StaticImageData;
  title1: string;
  title2: string;
  description: string;
}[];

export type TModal = {
  isOpenModal: boolean;
  openModal: () => void;
  closeModal: () => void;
};
