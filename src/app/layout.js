// These styles apply to every route in the application
import './globals.css';
import Providers from './providers';
import { roboto } from '../assets/styles/fonts';

export const metadata = {
  title: 'Free Lancers',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={roboto.className}>
          <Providers>{children}</Providers>
      </body>
    </html>
  );
}
