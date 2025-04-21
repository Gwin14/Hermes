import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./Screens/Dashboard";
import Createpost from "./Screens/Createpost";
import LoginRegister from "./Screens/LoginRegister";
import useAnimateElements from "./hooks/useAnimateElements";
import "./App.css";

function App() {
  useAnimateElements({ className: "card-widget", baseDelay: 0.1 });
  useAnimateElements({ className: "sidebar-button", baseDelay: 0.05 });
  useAnimateElements({ className: "media-button", baseDelay: 0.1 });

  return (
    <Router>
      <div className="app-container">
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/criar-post" element={<Createpost />} />
            <Route path="/login" element={<LoginRegister login="login" />} />
            <Route path="/registrar" element={<LoginRegister login="registrar" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
