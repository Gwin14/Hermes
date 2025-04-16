import "../App.css";
import CardWidget from "../components/CardWidget";
import Tabs from "../components/Tabs";
import "./Dashboard.css";
import { useState } from "react";
import { Instagram, Linkedin, Facebook, Twitter } from "lucide-react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Visão geral");

  return (
    <div className="dashboard">
      <h1 className="page-title">Dashboard</h1>
      <hr style={{ margin: "10px", opacity: "20%" }} />
      <Tabs
        tabs={["Visão geral", "Análise", "Calendário", "Lista"]}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div className="tab-content" style={{ padding: "20px" }}>
        {activeTab === "Visão geral" && (
          <section className="grid">
            <CardWidget className="col-1">
              <h3 className="subtitle">Total de posts</h3>
              <h2 className="title">100</h2>
              <p className="legend">+5% em relação ao mês anterior</p>
            </CardWidget>

            <CardWidget className="col-1">
              <h3 className="subtitle">Engajamento</h3>
              <h2 className="title">432</h2>
              <p className="legend" style={{ color: "green" }}>
                +6% em relação ao mês anterior
              </p>
            </CardWidget>

            <CardWidget className="col-1">
              <h3 className="subtitle">Redes conectadas</h3>
              <h2 className="title">100</h2>
              <p className="legend">
                <Facebook color="#1877F2" strokeWidth={1.5} />{" "}
                {/* Azul do Facebook */}
                <Twitter color="#1DA1F2" strokeWidth={1.5} />{" "}
                {/* Azul do Twitter */}
                <Instagram color="#C13584" strokeWidth={1.5} />{" "}
                {/* Roxo/rosa do Instagram */}
                <Linkedin color="#0077B5" strokeWidth={1.5} />{" "}
                {/* Azul do LinkedIn */}
              </p>
            </CardWidget>

            <CardWidget className="col-3">
              <img
                style={{ marginLeft: "10%", width: "75%" }}
                src="https://miro.medium.com/v2/resize:fit:1400/0*n1Nn6vK1jCOucBKZ.png"
                alt=""
              />
            </CardWidget>
          </section>
        )}

        {/*  */}
        {activeTab === "Análise" && <p>Conteúdo da Análise</p>}
        {activeTab === "Calendário" && <p>Conteúdo do Calendário</p>}
        {activeTab === "Lista" && <p>Conteúdo da Lista</p>}
      </div>
    </div>
  );
}
