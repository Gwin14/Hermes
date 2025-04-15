import "../App.css";
import "./SidebarButton.css";

export default function SidebarButton({ Icon, label, onClick }) {
  return (
    <button className="sidebar-button" onClick={onClick}>
      <Icon size={20} strokeWidth={1.5} />
      <span className="sidebar-label">{label}</span>
    </button>
  );
}
