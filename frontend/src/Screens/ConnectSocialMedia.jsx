import Badge from "../components/Badge";
import CardWidget from "../components/CardWidget";
import SocialIcon from "../components/SocialIcon";
import "../App.css";
import "./ConnectSocialMedia.css";
import ConnectSocialMediaButton from "../components/ConnectSocialMediaButton";

export default function ConnectSocialMedia() {
  return (
    <div className="connect-social-media" style={{ padding: "20px" }}>
      <h1 className="page-title">Redes conectadas</h1>{" "}
      <hr style={{ margin: "10px", opacity: "20%" }} />
      <section className="grid">
        <CardWidget className="col-1">
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
              <h3
                style={{
                  display: "inline-block",
                  color: "var(--text-color)",
                  paddingLeft: "10px",
                  transform: "translateY(-5px)",
                }}
              >
                Instagram
              </h3>
            </div>
            <Badge state="Conectado" />
          </section>
          <br />
          <br />
          <h2
            className="title"
            style={{ fontWeight: "normal", fontSize: "16px" }}
          >
            Conecte sua conta do Instagram para publicar fotos e vídeos.
          </h2>
          <button className="connect-button">Conectar</button>
        </CardWidget>

        <CardWidget className="col-3">
          <h3
            style={{
              color: "var(--text-color)",
              marginBottom: "10px",
            }}
          >
            Suas redes
          </h3>
          <div style={{ display: "flex", alignItems: "center" }}>
            <SocialIcon name="check" />
            {/* <SocialIcon name="Instagram" /> */}
            <p style={{ display: "inline", color: "white", marginLeft: "7px" }}>
              Instagram conectado como @seuusuario_
            </p>
          </div>
        </CardWidget>
      </section>
      <ConnectSocialMediaButton />
    </div>
  );
}
