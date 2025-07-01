import booking from '/public/svg/booking.svg';
import favourites from '/public/svg/favourites.svg';
import help from '/public/svg/help.svg';

export const menuItems = [
  {
    name: 'Bookings',
    icon: booking,
    pathname: '/bookings'
  },
  {
    name: 'Favorites',
    icon: favourites,
    pathname: '/favourites'
  },
  {
    name: 'Help & support',
    icon: help,
    pathname: '/help-and-support'
  }
];
