import "../App.css";
import CardWidget from "../components/CardWidget";
import Tabs from "../components/Tabs";
import "./Dashboard.css";
import { useState } from "react";
import Badge from "../components/Badge";
import SocialIcon from "../components/SocialIcon";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Visão geral");
  const [activePosts, setActivePosts] = useState("Todos");

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
                <SocialIcon name="facebook" />
                <SocialIcon name="twitter" />
                <SocialIcon name="instagram" />
                <SocialIcon name="linkedin" />
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

      <Tabs
        tabs={["Todos", "Publicados", "Agendados", "Rascunhos"]}
        activeTab={activePosts}
        setActiveTab={setActivePosts}
      />
      <div className="tab-content" style={{ padding: "20px" }}>
        {activePosts === "Todos" && (
          <section className="grid">
            <CardWidget className="col-3">
              <section
                className="post-info"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div>
                  <SocialIcon name="instagram" />
                  <SocialIcon name="linkedin" />
                </div>
                <Badge state="Publicado" />
              </section>
              <br />
              <br />
              <h2
                className="title"
                style={{ fontWeight: "normal", fontSize: "16px" }}
              >
                Lançamento do novo produto chegando! Fiquem ligados para
                novidades incríveis.
              </h2>
              <p className="legend">120 likes</p>
              <p className="legend">24 comentários</p>
              <p className="legend">18 compartilhamentos</p>
            </CardWidget>
          </section>
        )}

        {activePosts === "Publicados" && <p>Conteúdo do Calendário</p>}
        {activePosts === "Agendados" && <p>Conteúdo da Lista</p>}
        {activePosts === "Rascunhos" && <p>Conteúdo da Lista</p>}
      </div>
    </div>
  );
}
