import { EBookingsType } from '@/shared/enum/status.enum';

export const bookingsData = [
  {
    image: '/svg/HomeCard1.svg',
    status: EBookingsType.CONFIRMED,
    type: 'Traditional',
    guestCount: 12,
    title: 'Han Tale Barbecue',
    time: '8:30PM',
    date: '14 Feb 2025'
  },
  {
    image: '/svg/bookingCard2.svg',
    status: EBookingsType.CONFIRMED,
    type: 'Traditional',
    guestCount: 12,
    title: 'The White Hall Buffet',
    time: '8:30PM',
    date: '14 Feb 2025'
  },
  {
    image: '/svg/bookingCard3.svg',
    status: EBookingsType.CANCELED,
    type: 'Traditional',
    guestCount: 12,
    title: 'Forest Lounge',
    time: '8:30PM',
    date: '14 Feb 2025'
  },
  {
    image: '/svg/bookingCard4.svg',
    status: EBookingsType.CONFIRMED,
    type: 'Traditional',
    guestCount: 12,
    title: 'Han Tale Barbecue',
    time: '8:30PM',
    date: '14 Feb 2025'
  }
];
