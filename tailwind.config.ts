import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      container: {
        padding: '20px',
        center: true,
        screens: {
          lg: '490px'
        }
      },
      colors: {
        'clr-black-01': '#120001',
        'clr-brown-4d': '#594D4D',
        'clr-gray-99': '#A09999',
        'clr-red-0b': '#B6020B',
        'clr-white-fa': '#FAFAFA',
        'clr-brown-67': '#716667',
        'clr-white-e6': '#E7E6E6',
        'clr-green-2f': '#00B12F',
        'clr-brown-34': '#413334',
        'clr-white-e7': '#F8E6E7',
        'clr-white-ed': '#EDEDED',
        'clr-white-f5': '#F5F5F5',
        'clr-dark-14': '#ffffff14',
        'clr-yellow-600': '#B19600',
        'clr-gray-d9': '#D9D9D9',
        'clr-brown-f3': '#F3F3F3',
        'clr-ed': '#EDEDED'
      },

      fontFamily: {
        'bold-disp': ['Sequel Sans Bold Disp'],
        'bold-body': ['Sequel Sans Bold Body', 'sans-serif'],
        'black-head': ['Sequel Sans Black Head', 'sans-serif'],
        'black-disp': ['Sequel Sans Black Disp', 'sans-serif'],
        'black-body': ['Sequel Sans Black Body', 'sans-serif'],
        'black-body-normal': ['Sequel Sans Book Body', 'sans-serif'],
        'heavy-disp': ['Sequel Sans Heavy Disp', 'sans-serif'],
        'book-disp': ['Sequel Sans Book Disp', 'sans-serif'],
        'bold-head': ['Sequel Sans Bold Head', 'sans-serif'],
        'heavy-head': ['Sequel Sans Heavy Head', 'sans-serif'],
        'book-head': ['Sequel Sans Book Head', 'sans-serif'],
        'heavy-body': ['Sequel Sans Heavy Body', 'sans-serif'],
        'light-body': ['Sequel Sans Light Body', 'sans-serif'],
        'light-disp': ['Sequel Sans Light Disp'],
        'light-head': ['Sequel Sans Light Head', 'sans-serif'],
        'roman-disp': ['Sequel Sans Roman Disp', 'sans-serif'],
        'medium-body': ['Sequel Sans Medium Body', 'sans-serif'],
        'roman-head': ['Sequel Sans Roman Head', 'sans-serif'],
        'roman-body': ['Sequel Sans Roman Body', 'sans-serif'],
        'medium-disp': ['Sequel Sans Medium Disp', 'sans-serif'],
        'medium-head': ['Sequel Sans Medium Head', 'sans-serif'],
        'semi-bold-disp': ['Sequel Sans Semi Bold Disp', 'sans-serif'],
        'semi-bold-head': ['Sequel Sans Semi Bold Head', 'sans-serif'],
        'semi-bold-body': ['Sequel Sans Semi Bold Body', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'icon-search': "url('/assets/ic_search.svg')"
      },
      boxShadow: {
        one: '0px 0px 1.742px 0px rgba(145, 158, 171, 0.20), 0px 10.449px 20.899px -3.483px rgba(145, 158, 171, 0.12)',
        'top-sm': '0px -4px 12px 0px rgba(0, 0, 0, 0.06)',
        bottomModal: ' 0px -4px 15px 0px rgba(0, 0, 0, 0.04)',
        map: '0px 2px 10px 0px rgba(0, 0, 0, 0.12)',
        search: '0px 2px 10px 0px rgba(0, 0, 0, 0.08)',
        card: '0px 0px 10px 0px rgba(0, 0, 0, 0.08)'
      }
    }
  },
  plugins: []
};
export default config;
