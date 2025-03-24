import React from 'react';
import HeroSlider from './components/HeroSlider';
import Promozioni from './components/Promozioni';
import Recensioni from './components/Recensioni';
import logo from './assets/logo.png';

const App = () => {
  return (
    <div>
      <header className="flex items-center p-4 bg-white shadow">
        <img src={logo} alt="WindTre Romagnano" className="h-12 mr-4" />
        <h1 className="text-2xl font-bold text-orange-600">WindTre Romagnano Sesia</h1>
      </header>

      <HeroSlider />

      <section className="p-8 bg-white">
        <h2 className="text-2xl font-bold mb-4">Chi siamo</h2>
        <p>Siamo uno store WindTre situato nel cuore di Romagnano Sesia. Offriamo un servizio completo: vendita e assistenza su smartphone, spedizioni Vinted, riparazioni e stampa 3D.</p>
      </section>

      <Promozioni />

      <section className="p-8 bg-white">
        <h2 className="text-2xl font-bold mb-4">Contattaci</h2>
        <form className="space-y-4 max-w-md">
          <input type="text" placeholder="Nome" className="w-full p-2 border rounded" />
          <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
          <textarea placeholder="Messaggio" className="w-full p-2 border rounded"></textarea>
          <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded">Invia</button>
        </form>
      </section>

      <Recensioni />

      <footer className="bg-gray-800 text-white text-center p-4">
        © 2025 WindTre Romagnano Sesia - Tutti i diritti riservati
      </footer>
    </div>
  );
};

export default App;
