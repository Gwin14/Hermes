import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const iconMap = {
  facebook: { Icon: Facebook, color: "#1877F2" },
  twitter: { Icon: Twitter, color: "#1DA1F2" },
  instagram: { Icon: Instagram, color: "#C13584" },
  linkedin: { Icon: Linkedin, color: "#0077B5" },
};

export default function SocialIcon({ name, size = 24, strokeWidth = 1.5 }) {
  const data = iconMap[name.toLowerCase()];
  if (!data) return null;

  const { Icon, color } = data;
  return <Icon color={color} size={size} strokeWidth={strokeWidth} />;
}
