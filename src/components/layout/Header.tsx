import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
const navLinks = [{
  name: "Home",
  path: "/"
}, {
  name: "About",
  path: "/about"
}, {
  name: "Services",
  path: "/services"
}, {
  name: "Portfolio",
  path: "/portfolio"
}, {
  name: "Testimonials",
  path: "/testimonials"
}, {
  name: "Contact",
  path: "/contact"
}];
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-wide mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="font-display text-xl md:text-2xl font-bold text-foreground tracking-tight">
                IMPAVID VENTURE 
              </span>
              
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`text-sm font-medium transition-colors link-underline ${location.pathname === link.path ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                {link.name}
              </Link>)}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+919876543210" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </a>
            <Button asChild className="bg-gradient-brand hover:opacity-90 transition-opacity">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-foreground" aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: "auto"
      }} exit={{
        opacity: 0,
        height: 0
      }} className="lg:hidden bg-background border-b border-border overflow-hidden">
            <nav className="container-wide mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map(link => <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className={`text-lg font-medium py-2 transition-colors ${location.pathname === link.path ? "text-primary" : "text-muted-foreground"}`}>
                  {link.name}
                </Link>)}
              <div className="pt-4 border-t border-border flex flex-col gap-3">
                <a href="tel:+919876543210" className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </a>
                <Button asChild className="bg-gradient-brand w-full">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>Get a Quote</Link>
                </Button>
              </div>
            </nav>
          </motion.div>}
      </AnimatePresence>
    </header>;
};
export default Header;