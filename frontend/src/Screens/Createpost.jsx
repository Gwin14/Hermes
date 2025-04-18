import React from "react";
import CardWidget from "../components/CardWidget";
import Tabs from "../components/Tabs";
import { useState } from "react";

export default function Createpost() {
  const [activeTab, setActiveTab] = useState("Visão geral");

  return (
    <div className="createpost" style={{ padding: "20px" }}>
      <h1 className="page-title">Criar postagem</h1>
      <hr style={{ margin: "10px", opacity: "20%" }} />
      <section className="grid">
        <CardWidget className="col-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <button key={index} style={{ margin: "10px" }}>
              Botão {index + 1}
            </button>
          ))}

          <br />

          <textarea
            style={{ width: "100%", height: "200px", marginTop: "10px" }}
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

          {Array.from({ length: 6 }).map((_, index) => (
            <div>
              <input type="checkbox" style={{ margin: "10px" }} />
              <p style={{ display: "inline", color: "white" }}>
                Rede {index + 1}
              </p>
            </div>
          ))}

          <br />
        </CardWidget>
      </section>
    </div>
  );
}
