import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./Screens/Dashboard";
import Createpost from "./Screens/Createpost";
import useAnimateElements from "./hooks/useAnimateElements";
import LoginRegister from "./Screens/LoginRegister";

function App() {
  const [currentScreen, setCurrentScreen] = useState("Criar post");
  useAnimateElements({ className: "card-widget", baseDelay: 0.1 });
  useAnimateElements({ className: "sidebar-button", baseDelay: 0.05 });
  useAnimateElements({ className: "media-button", baseDelay: 0.1 });

  const renderScreen = () => {
    switch (currentScreen) {
      case "Dashboard":
        return <Dashboard />;
      case "Criar post":
        return <Createpost />;

      default:
        return <div>Escolha uma opção no menu</div>;
    }
  };

  return (
    // <div className="app-container">
    //   <aside>
    //     <Sidebar onSelect={setCurrentScreen} />
    //   </aside>

    //   <main>{renderScreen()}</main>
    // </div>
    <LoginRegister />
  );
}

export default App;
