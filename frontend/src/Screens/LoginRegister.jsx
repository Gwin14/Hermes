import CardWidget from "../components/CardWidget";
import "./LoginRegister.css";
import "../App.css";

export default function LoginRegister({ login = "login" }) {
  return (
    <section className="grid">
      <CardWidget className="col-3">
        <div className="login-register-container">
          <h1 className="page-title">
            {login === "login" ? "Entrar" : "Registrar"}
          </h1>
          <form className="login-form">
            <input type="text" placeholder="👤 Usuário" required />
            <input type="password" placeholder="🔒 Senha" required />

            {login === "login" && (
              <p className="forgot-password">Esqueceu a senha?</p>
            )}
            <button type="submit" className="login-register-button">
              {login === "login" ? "Entrar" : "Registrar"}
            </button>
            <hr style={{ opacity: 0.3 }} />
            <p className="change-form">
              {login === "login"
                ? "Não tem uma conta? Cadastre-se"
                : "Já possui uma conta? Entre"}
            </p>
          </form>
        </div>
      </CardWidget>

      <h1 className="HERMES">HERMES</h1>
    </section>
  );
}
