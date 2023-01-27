import EmotionRegistry from '@/app/Registry';
import Header from '@/app/Header';
import Footer from '@/app/Footer';
import '@/styles/globals.css';
import { ReactNode } from 'react';
import Nav from '@/app/Nav';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
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
