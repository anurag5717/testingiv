import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
const WhatsAppButton = () => {
  const phoneNumber = "919876543210";
  const message = "Hello! I'm interested in your event management services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </motion.a>
  );
};
export default WhatsAppButton;