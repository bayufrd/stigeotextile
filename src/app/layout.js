import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton"; 
// app/layout.js
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
    subsets: ['latin'], 
    weight: ['300', '400', '500', '600', '700'],
    display: 'swap'
});

export const metadata = {
  title: 'Sentra Teknologi Investama | Geotextile & Produk Konstruksi',
  description: 'Supplier geotextile terbaik di Indonesia. Produk geotextile non-woven, woven, dan geosynthetics berkualitas.',
  keywords: ['geotextile', 'geotextile non-woven', 'geotextile woven', 'distributor geotextile', 'sentra teknologi investama', 'stigeotextile', 'sentra geotextile'],
  authors: [{ name: 'Sentra Teknologi Investama' }],
  robots: 'index, follow',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Sentra Teknologi Investama | Geotextile',
    description: 'Distributor resmi produk geotextile dan geosynthetics di Indonesia.',
    url: 'https://www.stigeotextile.com',
    siteName: 'Sentra Teknologi Investama',
    images: [
      {
        url: '/logo.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: '/logo.jpg',
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="id" className={poppins.className}>
      <head>
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <Navbar />
        <main className="flex-1 container mx-auto px-4 sm:px-0">
          {children}
        </main>
        <Footer />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}

