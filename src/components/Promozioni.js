import React, { useEffect, useState } from 'react';

const Promozioni = () => {
  const [promozioni, setPromozioni] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/TUO-NOME-UTENTE/windtre-scraper/main/public/promozioni.json")
      .then((res) => res.json())
      .then((data) => setPromozioni(data))
      .catch((err) => console.error("Errore nel caricamento promozioni:", err));
  }, []);

  return (
    <section style={{ padding: '2rem', backgroundColor: '#f5f5f5' }}>
      <h2>Promozioni WindTre</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {promozioni.map((promo, idx) => (
          <div key={idx} style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '1rem',
            maxWidth: '250px',
            backgroundColor: '#fff'
          }}>
            {promo.immagine && <img src={promo.immagine} alt={promo.titolo} style={{ width: '100%', borderRadius: '5px' }} />}
            <h3 style={{ fontSize: '1.1rem' }}>{promo.titolo}</h3>
            <a href={promo.link} target="_blank" rel="noopener noreferrer">Scopri di più</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Promozioni;
