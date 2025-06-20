import "../App.css";
import React, { useState, useRef } from "react";
import CardWidget from "../components/CardWidget";
import Tabs from "../components/Tabs";
import "./CreatePost.css";
import SocialIcon from "../components/SocialIcon";
import Carousel from "../components/Carousel";
import axios from "axios"; // Importando axios para fazer requisições

export default function CreatePost() {
  const [activeTab, setActiveTab] = useState("Visão geral");
  const [imagensPreview, setImagensPreview] = useState([]);
  const [textoPost, setTextoPost] = useState("");
  const [estilo, setEstilo] = useState(""); // Estado para estilo
  const [redes, setRedes] = useState([
    "instagram",
    "facebook",
    "linkedin",
    "twitter",
  ]);
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
        if (novasImagens.length === arquivos.length) {
          setImagensPreview((prev) => [...prev, ...novasImagens]);
        }
      };
      leitor.readAsDataURL(arquivo);
    });
  };

  // Função para melhorar o texto
  const melhorarTexto = async () => {
    try {
      const prompt = `Transforme a descrição em algo mais sólido, mas mantendo a essência: "${textoPost}", no estilo ${estilo}. Quero apenas a frase melhorada, sem explicações, sem aspas.`;
      const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          model: "deepseek/deepseek-chat-v3-0324:free",
          messages: [{ role: "user", content: prompt }],
        },
        {
          headers: {
            Authorization: `Bearer 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`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const fraseMelhorada = response.data.choices[0].message.content;
        setTextoPost(fraseMelhorada); // Atualiza o estado com o texto melhorado
      } else {
        console.error(
          "Erro ao melhorar o texto:",
          response.status,
          response.data
        );
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
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
          <button className="ia-button" onClick={melhorarTexto}>
            <SocialIcon name="sparkle" />
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
            value={textoPost}
            onChange={(e) => setTextoPost(e.target.value)}
          ></textarea>

          {imagensPreview.length > 0 && (
            <div className="image-preview">
              {imagensPreview.map((src, index) => (
                <img
                  className="post-image"
                  key={index}
                  src={src}
                  alt={`imagem-${index}`}
                />
              ))}
            </div>
          )}
        </CardWidget>

        <div>
          <Tabs tabs={redes} activeTab={redes[0]} setActiveTab={setActiveTab} />
          <CardWidget className="col-1">
            <img
              src="https://images.unsplash.com/photo-1597848212624-a19eb35e2651?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lyYXNvbHxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <p className="account-name">
              @fotoessencia_<span style={{ opacity: 0.5 }}> • Agora mesmo</span>
            </p>

            {(textoPost || imagensPreview.length > 0) && (
              <div style={{ marginTop: "20px" }}>
                {imagensPreview.length > 0 && (
                  <Carousel imagens={imagensPreview} />
                )}
              </div>
            )}

            <section className="interaction-icons">
              <div style={{ display: "flex", gap: "15px" }}>
                <SocialIcon name="heart" size={"30px"} />
                <SocialIcon name="messagecircle" size={"30px"} />
              </div>
              <SocialIcon name="bookmark" size={"30px"} />
            </section>

            {textoPost && (
              <p
                style={{
                  color: "white",
                  marginBottom: "10px",
                  whiteSpace: "pre-wrap",
                  marginTop: "10px",
                }}
              >
                {textoPost}
              </p>
            )}
          </CardWidget>
        </div>

        <CardWidget className="col-2">
          <p style={{ color: "white" }}>Redes sociais</p>
          <br />
          {redes.map((rede) => (
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
