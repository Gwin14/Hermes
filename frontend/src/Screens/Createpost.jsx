import "../App.css";
import React from "react";
import CardWidget from "../components/CardWidget";
import Tabs from "../components/Tabs";
import { useState } from "react";
import "./CreatePost.css";
import SocialIcon from "../components/SocialIcon";

export default function Createpost() {
  const [activeTab, setActiveTab] = useState("Visão geral");

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
          <button className="media-button">
            <SocialIcon name="image" />
          </button>

          <br />

          <textarea
            className="post-text"
            name="text"
            id="text"
            placeholder="Escreva aqui..."
          ></textarea>
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

          <div style={{ display: "flex", alignItems: "center" }}>
            <input className="social-checkbox" type="checkbox" />
            <SocialIcon name="facebook" />
            <p style={{ display: "inline", color: "white", marginLeft: "7px" }}>
              Facebook
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input className="social-checkbox" type="checkbox" />
            <SocialIcon name="instagram" />
            <p style={{ display: "inline", color: "white", marginLeft: "7px" }}>
              Instagram
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input className="social-checkbox" type="checkbox" />
            <SocialIcon name="linkedin" />
            <p style={{ display: "inline", color: "white", marginLeft: "7px" }}>
              Linkedin
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input className="social-checkbox" type="checkbox" />
            <SocialIcon name="twitter" />
            <p style={{ display: "inline", color: "white", marginLeft: "7px" }}>
              Twitter
            </p>
          </div>

          <br />
        </CardWidget>
      </section>
    </div>
  );
}
