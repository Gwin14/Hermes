import "../App.css";
import "./Sidebar.css";
import logo from "../assets/logo.png";
import SidebarButton from "./SidebarButton";
import { Link } from "react-router-dom"; // Importar o Link para navegação
import {
  Home,
  Settings,
  User,
  CirclePlus,
  Calendar,
  ChartColumn,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <section className="sidebar-header">
        <img src={logo} alt="" className="logo" />
        <h2 className="sidebar-title">Hermes</h2>
      </section>

      <Link to="/" className="sidebar-link">
        <SidebarButton Icon={Home} label="Dashboard" />
      </Link>
      <Link to="/criar-post" className="sidebar-link">
        <SidebarButton Icon={CirclePlus} label="Criar post" />
      </Link>
      <Link to="/agendamento" className="sidebar-link">
        <SidebarButton Icon={Calendar} label="Agendamento" />
      </Link>
      <Link to="/redes-sociais" className="sidebar-link">
        <SidebarButton Icon={ChartColumn} label="Redes sociais" />
      </Link>
      <Link to="/perfil" className="sidebar-link">
        <SidebarButton Icon={User} label="Perfil" />
      </Link>
      <Link to="/configuracoes" className="sidebar-link">
        <SidebarButton Icon={Settings} label="Configurações" />
      </Link>

      <div className="sidebar-footer">
        <Link to="/sair" className="sidebar-link">
          <SidebarButton Icon={LogOut} label="Sair" />
        </Link>
      </div>
    </div>
  );
}
