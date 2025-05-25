import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton"; 

export const metadata = {
  title: 'Sentra Teknologi Investama',
  description: 'Your trusted technology partner',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>Sentra Teknologi Investama</title>
        <meta name="description" content="Your trusted technology partner" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <Navbar />
        <main className="flex-1 container mx-auto px-4 sm:px-0">{children}</main>
        <Footer />
        <FloatingWhatsAppButton /> 
      </body>
    </html>
  );
}
