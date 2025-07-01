import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import Provider from '@/provider/Provider';
import { ELanguage } from '@/shared/enum/language.enum';

import { AuthPopupProvider } from '@/context/AuthPopupContext';
import '../styles/style.css';

import { SearchProvider } from '@/context/SearchContext';

import Auth from '@/modules/auth/Auth';

export const metadata: Metadata = {
  title: 'The Menu ',
  description: 'This starter pack created by Ashiqur Rahman '
};

const dmsans = DM_Sans({ subsets: ['latin'] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={ELanguage.ENGLISH}>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </head>
      <body suppressHydrationWarning={true} className={`${dmsans.className} font-sans`}>
        <AuthPopupProvider>
          <SearchProvider>
            <Provider>{children}
              <Auth />
            </Provider>
          </SearchProvider>
        </AuthPopupProvider>
        <Toaster position='top-center' reverseOrder={false} />
      </body>
    </html>
  );
}
