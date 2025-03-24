import React from "react";
import Slider from "react-slick";

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  const slides = [
    {
      title: "Offerte smartphone per tutti!",
      text: "Attiva la tua promo WindTre oggi stesso.",
      bg: "#ff6f00"
    },
    {
      title: "Spedisci con Vinted, Poste e corrieri",
      text: "Servizio veloce, comodo, senza code.",
      bg: "#f57c00"
    },
    {
      title: "Riparazioni rapide, professionali, garantite!",
      text: "Smartphone, tablet e PC in mani esperte.",
      bg: "#fb8c00"
    },
    {
      title: "Stampa 3D personalizzata e scansioni di precisione",
      text: "Tecnologia al servizio delle tue idee.",
      bg: "#ffa726"
    },
    {
      title: "Punto Impost attivo in negozio",
      text: "Ritiro e consegna pacchi in modo smart.",
      bg: "#ffb74d"
    }
  ];

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index}>
          <div
            style={{
              backgroundColor: slide.bg,
              height: "300px",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "2rem"
            }}
          >
            <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>{slide.title}</h2>
            <p style={{ fontSize: "1.2rem" }}>{slide.text}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default HeroSlider;
