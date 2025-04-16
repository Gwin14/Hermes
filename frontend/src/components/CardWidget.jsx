import "../App.css";
import "./CardWidget.css";

export default function CardWidget({ children, className = "" }) {
  return <div className={`card-widget ${className}`}>{children}</div>;
}
