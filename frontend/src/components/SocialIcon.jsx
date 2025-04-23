import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Bold,
  Italic,
  Underline,
  Link,
  Smile,
  Image,
  Heart,
  MessageCircle,
  Bookmark,
  AtSign,
  Lock,
  Sparkle
} from "lucide-react";

const iconMap = {
  facebook: { Icon: Facebook, color: "#1877F2" },
  twitter: { Icon: Twitter, color: "#1DA1F2" },
  instagram: { Icon: Instagram, color: "#C13584" },
  linkedin: { Icon: Linkedin, color: "#0077B5" },
  bold: { Icon: Bold, color: "#fff" },
  italic: { Icon: Italic, color: "#fff" },
  underline: { Icon: Underline, color: "#fff" },
  link: { Icon: Link, color: "#fff" },
  smile: { Icon: Smile, color: "#fff" },
  image: { Icon: Image, color: "#fff" },
  heart: { Icon: Heart, color: "#fff" },
  messagecircle: { Icon: MessageCircle, color: "#fff" },
  bookmark: { Icon: Bookmark, color: "#fff" },
  atsign: { Icon: AtSign, color: "#fff" },
  lock: { Icon: Lock, color: "#fff" },
  sparkle: { Icon: Sparkle, color: "#fff" }
};

export default function SocialIcon({ name, size = 24, strokeWidth = 1.5 }) {
  const data = iconMap[name.toLowerCase()];
  if (!data) return null;

  const { Icon, color } = data;
  return <Icon color={color} size={size} strokeWidth={strokeWidth} />;
}
