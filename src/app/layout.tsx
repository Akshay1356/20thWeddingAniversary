import type { Metadata } from 'next';
import { Cormorant_Garamond, Cinzel, Noto_Serif_Tamil, Plus_Jakarta_Sans, Caveat } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-cinzel',
  display: 'swap',
});

const notoTamil = Noto_Serif_Tamil({
  subsets: ['tamil'],
  weight: ['400', '600', '700'],
  variable: '--font-noto-tamil',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jakarta',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-caveat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'நூறு வருஷம் — 20th Wedding Anniversary | M. Prakash & P. Anitha',
  description: 'A celebration of 20 years of love, marriage, and family (2006 – 2026). Made with love by their son.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${cinzel.variable} ${notoTamil.variable} ${jakarta.variable} ${caveat.variable}`}
    >
      <body className="bg-ivory text-darkbrown font-sans antialiased selection:bg-gold-light selection:text-burgundy-dark">
        {children}
      </body>
    </html>
  );
}
