import '@/styles/global.css';

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, useMessages } from 'next-intl';

import { AppConfig } from '@/utils/AppConfig';
import Header from '@/components/Header';
import Body from '@/components/Body';
import "@/styles/global.css";
import Navigation from '@/components/Navigation';
import Announce from '@/components/Announce';

export const metadata: Metadata = {
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export default function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!AppConfig.locales.includes(props.params.locale)) notFound();

  // Using internationalization in Client Components
  const messages = useMessages();

  return (
    <html lang={props.params.locale}>
      <body className="bg-[#44416f]">
        <NextIntlClientProvider
          locale={props.params.locale}
          messages={messages}
        >
          <Header />
          <Navigation />
          <Announce />
          <Body>
            {props.children}
          </Body>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

// Enable edge runtime but you are required to disable the `migrate` function in `src/libs/DB.ts`
// Unfortunately, this also means it will also disable the automatic migration of the database
// And, you will have to manually migrate it with `drizzle-kit push`
// export const runtime = 'edge';
