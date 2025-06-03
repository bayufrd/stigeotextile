import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton"; 

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
    card: 'summary_large_image',
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <title>Sentra Teknologi Investama | Geotextile & Produk Konstruksi</title>
        <meta name="description" content="Supplier geotextile terbaik di Indonesia. Produk geotextile non-woven, woven, dan geosynthetics berkualitas." />
        <meta name="keywords" content="geotextile, geotextile non-woven, geotextile woven, distributor geotextile, sentra teknologi investama" />
        <meta name="author" content="Sentra Teknologi Investama" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Sentra Teknologi Investama | Geotextile" />
        <meta property="og:description" content="Distributor resmi produk geotextile dan geosynthetics di Indonesia." />
        <meta property="og:image" content="/logo.jpg" />
        <meta property="og:url" content="https://www.stigeotextile.com" />
        <meta name="twitter:card" content="summary_large_image" />
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

