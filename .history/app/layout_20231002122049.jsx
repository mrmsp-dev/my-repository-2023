import './globals.css';
import { Poppins } from 'next/font/google';
import SideMenu from '@/components/SideMenu';
import TopMenu from '@/components/TopMenu';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '400', '700', '800'],
});

export const metadata = {
  title: 'Mohammad Shariar Parvez',
  description: 'Full Stack Developer Portfolio Website',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
