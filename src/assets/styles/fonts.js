import { Roboto, Montserrat, Open_Sans } from 'next/font/google';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['300', '400', '700'],
});

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['300', '400', '700'],
});

const openSans = Open_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '700'],
});

export { roboto, montserrat, openSans };
