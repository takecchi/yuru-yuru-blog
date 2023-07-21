import EmotionRegistry from '@/components/ThemeRegistry/Registry';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/globals.css';
import { ReactNode } from 'react';
import Nav from '@/components/Nav';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={'ja'}>
      <head />
      <body>
        <EmotionRegistry>
          <Header />
          <Nav />
          {children}
          <Footer />
        </EmotionRegistry>
      </body>
    </html>
  );
}
