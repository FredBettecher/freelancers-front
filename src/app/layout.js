// These styles apply to every route in the application
import StyledComponentsRegistry from './lib/registry';
import './globals.css';
import { Roboto } from 'next/font/google'
 
export const metadata = {
  title: 'Free Lancers',
  description: '',
};

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});
 
export default function RootLayout({ children }) {
  return (
    <html>
      <body className={roboto.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}