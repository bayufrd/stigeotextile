import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton"; 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
          <main className="flex-1 container mx-auto p-4">{children}</main>
        <Footer />
        <FloatingWhatsAppButton /> 
      </body>
    </html>
  );
}