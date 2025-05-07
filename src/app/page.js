import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Footer from './components/Footer';
import About from './components/About';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About/>
      <Products />
    </div>
  );
}
