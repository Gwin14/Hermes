import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./Screens/Dashboard";
import useAnimateElements from "./hooks/useAnimateElements";

function App() {
  useAnimateElements({ className: "card-widget", baseDelay: 0.1 });
  useAnimateElements({ className: "sidebar-button", baseDelay: 0.05 });

  return (
    <div className="app-container">
      <aside>
        <Sidebar />
      </aside>

      <main>
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
