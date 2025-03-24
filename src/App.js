import React from 'react';
import logo from './assets/logo.png';
import Promozioni from './components/Promozioni';

const App = () => {
  return (
    <div>
      <header style={{ backgroundColor: '#fff', padding: '1rem', display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="WindTre Romagnano Sesia" style={{ height: '60px', marginRight: '1rem' }} />
        <h1>WindTre Romagnano Sesia</h1>
      </header>

      <section style={{ padding: '2rem', backgroundColor: '#ffe082' }}>
        <h2>Benvenuti!</h2>
        <p>Il tuo punto di riferimento per telefonia, spedizioni, riparazioni e servizi digitali.</p>
      </section>

      <section style={{ padding: '2rem' }}>
        <h2>Chi siamo</h2>
        <p>
          Siamo uno store WindTre situato nel cuore di Romagnano Sesia. Offriamo un servizio completo: vendita e assistenza su smartphone, spedizioni Vinted, riparazioni e stampa 3D.
        </p>
      </section>

      <Promozioni />

      <section style={{ padding: '2rem' }}>
        <h2>Contattaci</h2>
        <form>
          <label>Nome:<br /><input type="text" name="name" /></label><br />
          <label>Email:<br /><input type="email" name="email" /></label><br />
          <label>Messaggio:<br /><textarea name="message"></textarea></label><br />
          <button type="submit">Invia</button>
        </form>
      </section>

      <footer style={{ backgroundColor: '#333', color: '#fff', padding: '1rem', textAlign: 'center' }}>
        <img src={logo} alt="logo" style={{ height: '40px' }} />
        <p>© 2025 WindTre Romagnano Sesia - Tutti i diritti riservati</p>
      </footer>
    </div>
  );
};

export default App;
