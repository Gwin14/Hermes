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

export default function Sidebar() {
  return (
    <div className="sidebar">
      <section className="sidebar-header">
        <img src={logo} alt="" className="logo" />
        <h2 className="sidebar-title">Hermes</h2>
      </section>

      <SidebarButton Icon={Home} label="Dashboard" />
      <SidebarButton Icon={CirclePlus} label="Criar post" />
      <SidebarButton Icon={Calendar} label="Agendamento" />
      <SidebarButton Icon={ChartColumn} label="Redes sociais" />
      <SidebarButton Icon={User} label="Perfil" />
      <SidebarButton Icon={Settings} label="Configurações" />

      <div className="sidebar-footer">
        <SidebarButton Icon={LogOut} label="Sair" />
      </div>
    </div>
  );
}
