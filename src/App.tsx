import Hero from './components/Hero';
import Book from './components/sections/Book';
import Pricing from './components/sections/Pricing';
import Services from './components/sections/Services';
import Team from './components/sections/Team';
import ThaiMassage from './components/sections/ThaiMassage';

export default function App() {
  return (
    <main className="bg-black text-primary">
      <Hero />
      <Services />
      <Pricing />
      <Team />
      <ThaiMassage />
      <Book />
    </main>
  );
}
