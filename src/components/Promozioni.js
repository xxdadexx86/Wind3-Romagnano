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
    <section className="p-8 bg-gray-100">
      <h2 className="text-2xl font-semibold mb-4">Promozioni WindTre</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {promozioni.map((promo, idx) => (
          <div key={idx} className="bg-white rounded shadow p-4">
            {promo.immagine && <img src={promo.immagine} alt={promo.titolo} className="rounded mb-2" />}
            <h3 className="text-lg font-bold">{promo.titolo}</h3>
            <a href={promo.link} target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">Scopri di più</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Promozioni;
