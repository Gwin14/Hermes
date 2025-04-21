import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importe o useNavigate
import CardWidget from "../components/CardWidget";
import "./LoginRegister.css";
import "../App.css";

export default function LoginRegister({ login = "login" }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Hook para navegação

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const url = login === "login" 
      ? "http://localhost:8000/auth/api/token/"
      : "http://localhost:8000/auth/api/register/";

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (res.ok) {
        if (login === "login") {
          localStorage.setItem("access", data.access);
          localStorage.setItem("refresh", data.refresh);
          setMessage("Login bem-sucedido!");
          navigate("/"); // Redireciona para a página inicial após login
        } else {
          setMessage("Cadastro realizado com sucesso! Agora, faça login.");
          navigate("/login"); // Redireciona para a página de login após registro
        }
      } else {
        setMessage(data.error || "Algo deu errado!");
      }
    } catch (error) {
      setMessage("Erro de conexão com o servidor");
    }
  };

  // Função para alternar entre login e registro
  const toggleAuthMode = () => {
    if (login === "login") {
      navigate("/registrar");
    } else {
      navigate("/login");
    }
  };

  return (
    <section className="login-register-screen">
      <CardWidget className="col-3">
        <div className="login-register-container">
          <h1 className="page-title">
            {login === "login" ? "Entrar" : "Registrar"}
          </h1>
          <form className="login-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="👤 Usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="🔒 Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {login === "login" && (
              <p className="forgot-password">Esqueceu a senha?</p>
            )}
            <button type="submit" className="login-register-button">
              {login === "login" ? "Entrar" : "Registrar"}
            </button>
            <hr style={{ opacity: 0.3 }} />
            <p className="change-form" onClick={toggleAuthMode} style={{ cursor: "pointer" }}>
              {login === "login"
                ? "Não tem uma conta? Cadastre-se"
                : "Já possui uma conta? Entre"}
            </p>
          </form>
          {message && <p className="message">{message}</p>}
        </div>
      </CardWidget>

      <h1 className="HERMES">HERMES</h1>
    </section>
  );
}