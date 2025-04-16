import "../App.css";
import "./Tabs.css";

export default function Tabs({ tabs, activeTab, setActiveTab }) {
  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tab ${activeTab === tab ? "active" : "inactive"}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
