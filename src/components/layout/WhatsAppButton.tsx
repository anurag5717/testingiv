import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
const WhatsAppButton = () => {
  const phoneNumber = "919876543210";
  const message = "Hello! I'm interested in your event management services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return;
};
export default WhatsAppButton;