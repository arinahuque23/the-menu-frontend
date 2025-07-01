import { EBookingsType, EResturantStatusType } from '@/shared/enum/status.enum';
import type { TBasedSliderContentItem } from '@/shared/type';

export const basedSliderContent: TBasedSliderContentItem = [
  {
    sliderImage: '/images/slider-one.png',
    title1: 'Welcome to',
    title2: '',
    description: 'Your personalized guide to the best restaurants and cafes in Georgia'
  },
  {
    sliderImage: '/images/slider-two.png',
    title1: 'Looking for the',
    title2: 'perfect place to dine?',
    description:
      "From cozy coffee shops to haute cuisine restaurants, we'll help you find an establishment that perfectly suits your tastes"
  },
  {
    sliderImage: '/images/slider-three.png',
    title1: 'Book a table',
    title2: 'quickly and easily',
    description:
      'Book a table in two clicks and get instant confirmation. Forget inconvenient calls and long waits'
  },
  {
    sliderImage: '/images/slider-four.png',
    title1: 'Exclusive offers',
    title2: 'just for you',
    description: 'Get special offers such as a free glass of wine or dessert from the venue'
  },
  {
    sliderImage: '/images/slider-five.png',
    title1: 'Learn all about',
    title2: 'the best places to eat',
    description: 'See the menus, read the reviews and explore photos of dishes to make the right choice'
  },
  {
    sliderImage: '/images/slider-six.png',
    title1: 'Plan your vacation',
    title2: 'in comfort',
    description: ' Save time and make your Georgia trip unforgettable with our support'
  }
];

export const restaurantData = [
  {
    image: '/svg/HomeCard1.svg',
    status: EResturantStatusType.OPEN,
    type: 'Barbecue',
    title: 'Han Tale Barbecue',
    avgPrice: 14,
    time: '8:30PM',
    date: '14 Feb 2025',
    change: 'Change',
    bookingsCount: 144,
    label: 'Menu',
    rating: 4.8
  },
  {
    image: '/svg/HomeCard2.svg',
    status: EResturantStatusType.CLOSED,
    type: 'Japanese',
    title: 'Sushi Palace',
    avgPrice: 22,
    time: '7:00PM',
    date: '15 Feb 2025',
    change: 'Change',
    bookingsCount: 89,
    label: 'Book',
    rating: 4.5
  },
  {
    image: '/svg/HomeCard1.svg',
    status: EResturantStatusType.OPEN,
    type: 'Italian',
    title: 'Pizza Heaven',
    avgPrice: 12,
    time: '6:45PM',
    date: '16 Feb 2025',
    change: 'Change',
    bookingsCount: 210,
    label: 'Order',
    rating: 4.7
  },
  {
    image: '/svg/HomeCard2.svg',
    status: EResturantStatusType.CLOSED,
    type: 'American',
    title: 'Burger Barn',
    avgPrice: 10,
    time: '5:30PM',
    date: '17 Feb 2025',
    change: 'Change',
    bookingsCount: 75,
    label: 'Deals',
    rating: 4.2
  }
];
