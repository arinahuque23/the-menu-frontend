import { EResturantStatusType } from '@/shared/enum/status.enum';
import type { StaticImageData } from 'next/image';
import MostBookedimg from '/public/svg/HomeCard1.svg';
import HomeCard2 from '/public/svg/HomeCard2.svg';

export interface IRestaurant {
  id: number;
  image: StaticImageData;
  status: EResturantStatusType;
  type: string;
  title: string;
  avgPrice: number;
  bookingsCount: number;
  rating: number;
  label: string;
  lat: number;
  lng: number;
}

export const restaurantsData: IRestaurant[] = [
  {
    id: 1,
    image: MostBookedimg,
    status: EResturantStatusType.OPEN,
    type: 'Traditional',
    title: 'Han Tale Barbecue',
    avgPrice: 14,
    bookingsCount: 144,
    rating: 4.8,
    label: 'Menu',
    lat: 40.7,
    lng: -73.8
  },
  {
    id: 2,
    image: HomeCard2,
    status: EResturantStatusType.OPEN,
    type: 'Italian',
    title: 'Pasta Paradise',
    avgPrice: 18,
    bookingsCount: 122,
    rating: 4.8,
    label: 'Menu',
    lat: 40.705,
    lng: -73.81
  },
  {
    id: 3,
    image: HomeCard2,
    status: EResturantStatusType.CLOSED,
    type: 'Mexican',
    title: 'Taco Temple',
    avgPrice: 12,
    bookingsCount: 98,
    rating: 4.8,
    label: 'Menu',
    lat: 40.71,
    lng: -73.805
  },
  {
    id: 4,
    image: MostBookedimg,
    status: EResturantStatusType.OPEN,
    type: 'Japanese',
    title: 'Sushi Supreme',
    avgPrice: 22,
    bookingsCount: 110,
    rating: 4.8,
    label: 'Menu',
    lat: 40.715,
    lng: -73.815
  }
];
