import React, { useEffect, useState } from 'react';

const Recensioni = () => {
  const [recensioni, setRecensioni] = useState([]);

  useEffect(() => {
    fetch("/recensioni.json")
      .then(res => res.json())
      .then(data => setRecensioni(data));
  }, []);

  return (
    <section className="p-8 bg-white">
      <h2 className="text-2xl font-bold mb-4">Cosa dicono i nostri clienti</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {recensioni.map((rec, i) => (
          <div key={i} className="border p-4 rounded shadow">
            <p className="text-lg font-semibold">{rec.nome}</p>
            <p className="text-yellow-500">{"★".repeat(rec.valutazione)}</p>
            <p className="mt-2 italic">"{rec.testo}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recensioni;
