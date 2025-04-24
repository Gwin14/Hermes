import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./Screens/Dashboard";
import Createpost from "./Screens/Createpost";
import ConnectSocialMedia from "./Screens/ConnectSocialMedia";
import LoginRegister from "./Screens/LoginRegister";
import useAnimateElements from "./hooks/useAnimateElements";
import "./App.css";

// Componente para rotas protegidas
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("access"); // Verifica se existe um token de acesso

  if (!isAuthenticated) {
    // Se não estiver autenticado, redireciona para a página de login
    return <Navigate to="/login" replace />;
  }

  return children;
};

function AppContent() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/registrar';

  return (
    <div className="app-container">
      {!isAuthPage && (
        <aside>
          <Sidebar />
        </aside>
      )}
      <main>
        <Routes>
          {/* Rotas protegidas */}
          <Route path="/" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } /> 
          <Route path="/criar-post" element={
            <ProtectedRoute>
              <Createpost />
            </ProtectedRoute>
          } />
          <Route path="/redes-sociais" element={
            <ProtectedRoute>
              <ConnectSocialMedia />
            </ProtectedRoute>
          } />

          
          
          {/* Rotas públicas */}
          <Route path="/login" element={<LoginRegister login="login" />} />
          <Route path="/registrar" element={<LoginRegister login="registrar" />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  useAnimateElements({ className: "card-widget", baseDelay: 0.1 });
  useAnimateElements({ className: "sidebar-button", baseDelay: 0.05 });
  useAnimateElements({ className: "media-button", baseDelay: 0.1 });

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;