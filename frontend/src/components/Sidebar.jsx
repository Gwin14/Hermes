import "../App.css";
import "./Sidebar.css";
import logo from "../assets/logo.png";
import SidebarButton from "./SidebarButton";
import {
  Home,
  Settings,
  User,
  CirclePlus,
  Calendar,
  ChartColumn,
  LogOut,
} from "lucide-react";

export default function Sidebar({ onSelect }) {
  return (
    <div className="sidebar">
      <section className="sidebar-header">
        <img src={logo} alt="" className="logo" />
        <h2 className="sidebar-title">Hermes</h2>
      </section>

      <SidebarButton
        Icon={Home}
        label="Dashboard"
        onClick={() => onSelect("Dashboard")}
      />
      <SidebarButton
        Icon={CirclePlus}
        label="Criar post"
        onClick={() => onSelect("Criar post")}
      />
      <SidebarButton
        Icon={Calendar}
        label="Agendamento"
        onClick={() => onSelect("Agendamento")}
      />
      <SidebarButton
        Icon={ChartColumn}
        label="Redes sociais"
        onClick={() => onSelect("Redes sociais")}
      />
      <SidebarButton
        Icon={User}
        label="Perfil"
        onClick={() => onSelect("Perfil")}
      />
      <SidebarButton
        Icon={Settings}
        label="Configurações"
        onClick={() => onSelect("Configurações")}
      />

      <div className="sidebar-footer">
        <SidebarButton
          Icon={LogOut}
          label="Sair"
          onClick={() => onSelect("Sair")}
        />
      </div>
    </div>
  );
}
