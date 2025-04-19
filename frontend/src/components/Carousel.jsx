import React, { useState } from "react";
import "./Carousel.css";

export default function Carousel({ imagens }) {
  const [indexAtual, setIndexAtual] = useState(0);

  const avancar = () => {
    setIndexAtual((prev) => (prev + 1) % imagens.length);
  };

  const voltar = () => {
    setIndexAtual((prev) => (prev === 0 ? imagens.length - 1 : prev - 1));
  };

  if (!imagens || imagens.length === 0) return null;

  return (
    <div className="carousel-container">
      <img
        src={imagens[indexAtual]}
        alt={`imagem-${indexAtual}`}
        className="carousel-image"
      />

      {imagens.length > 1 && (
        <>
          <button className="carousel-button left" onClick={voltar}>
            ◀
          </button>
          <button className="carousel-button right" onClick={avancar}>
            ▶
          </button>
        </>
      )}

      <div className="carousel-indicators">
        {imagens.map((_, i) => (
          <span
            key={i}
            className={`carousel-indicator ${i === indexAtual ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
