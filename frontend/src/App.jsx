import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./Screens/Dashboard";

function App() {
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
