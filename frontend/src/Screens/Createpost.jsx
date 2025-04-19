import "../App.css";
import React, { useState, useRef } from "react";
import CardWidget from "../components/CardWidget";
import Tabs from "../components/Tabs";
import "./CreatePost.css";
import SocialIcon from "../components/SocialIcon";

export default function Createpost() {
  const [activeTab, setActiveTab] = useState("Visão geral");
  const [imagensPreview, setImagensPreview] = useState([]);
  const inputImagemRef = useRef();

  const handleImagemClick = () => {
    inputImagemRef.current.click();
  };

  const handleImagemChange = (event) => {
    const arquivos = Array.from(event.target.files);
    const novasImagens = [];

    arquivos.forEach((arquivo) => {
      const leitor = new FileReader();
      leitor.onload = () => {
        novasImagens.push(leitor.result);
        // Quando terminar de ler todos, atualiza o state
        if (novasImagens.length === arquivos.length) {
          setImagensPreview((prev) => [...prev, ...novasImagens]);
        }
      };
      leitor.readAsDataURL(arquivo);
    });
  };

  return (
    <div className="createpost" style={{ padding: "20px" }}>
      <h1 className="page-title">Criar postagem</h1>
      <hr style={{ margin: "10px", opacity: "20%" }} />
      <section className="grid">
        <CardWidget className="col-2">
          <button className="media-button">
            <SocialIcon name="bold" />
          </button>
          <button className="media-button">
            <SocialIcon name="italic" />
          </button>
          <button className="media-button">
            <SocialIcon name="underline" />
          </button>
          <button className="media-button">
            <SocialIcon name="link" />
          </button>
          <button className="media-button">
            <SocialIcon name="smile" />
          </button>
          <button className="media-button" onClick={handleImagemClick}>
            <SocialIcon name="image" />
          </button>

          <input
            type="file"
            accept="image/*"
            multiple
            ref={inputImagemRef}
            onChange={handleImagemChange}
            style={{ display: "none" }}
          />

          <br />

          <textarea
            className="post-text"
            name="text"
            id="text"
            placeholder="Escreva aqui..."
          ></textarea>

          {imagensPreview.length > 0 && (
            <div className="image-preview">
              {imagensPreview.map((src, index) => (
                <img className="post-image" key={index} src={src} alt={`imagem-${index}`} />
              ))}
            </div>
          )}
        </CardWidget>

        <div>
          <Tabs
            tabs={["Visão geral", "Análise", "Calendário", "Lista"]}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <CardWidget className="col-1"></CardWidget>
        </div>

        <CardWidget className="col-2">
          <p style={{ color: "white" }}>Redes sociais</p>
          <br />
          {["facebook", "instagram", "linkedin", "twitter"].map((rede) => (
            <div key={rede} style={{ display: "flex", alignItems: "center" }}>
              <input className="social-checkbox" type="checkbox" />
              <SocialIcon name={rede} />
              <p
                style={{ display: "inline", color: "white", marginLeft: "7px" }}
              >
                {rede.charAt(0).toUpperCase() + rede.slice(1)}
              </p>
            </div>
          ))}
          <br />
        </CardWidget>
      </section>
    </div>
  );
}
