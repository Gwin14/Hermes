import React, { useState } from "react";
import "./Carousel.css";

export default function Carousel({ imagens }) {
  const [indexAtual, setIndexAtual] = useState(0);
  const total = imagens.length;

  const avancar = () => {
    setIndexAtual((prev) => (prev + 1) % total);
  };

  const voltar = () => {
    setIndexAtual((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  if (!imagens || total === 0) return null;

  return (
    <div className="carousel-container">
      {/* Track que desliza horizontalmente */}
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${indexAtual * 100}%)` }}
      >
        {imagens.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`imagem-${i}`}
            className="carousel-image"
          />
        ))}
      </div>

      {/* Botões de navegação */}
      {total > 1 && (
        <>
          <button className="carousel-button left" onClick={voltar}>
            ◀
          </button>
          <button className="carousel-button right" onClick={avancar}>
            ▶
          </button>
        </>
      )}

      {/* Indicadores */}
      <div className="carousel-indicators">
        {imagens.map((_, i) => (
          <span
            key={i}
            className={`carousel-indicator ${i === indexAtual ? "active" : ""}`}
            onClick={() => setIndexAtual(i)}
          />
        ))}
      </div>
    </div>
  );
}
