import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Portfolio',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${inter.className} antialiased`}>
        <Navbar />
        {children}
        <Footer /> 
      </body>
    </html>
  );
}