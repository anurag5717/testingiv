import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
const Footer = () => {
  return <footer className="bg-charcoal text-white">
      <div className="container-wide mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="font-display text-2xl font-bold mb-1">IMPAVID VENTURE</h3>
              <p className="text-sm text-white/60 tracking-wider uppercase">PRIVATE LIMITED</p>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Crafting the impossible into unforgettable reality. India's premier event management company delivering excellence across corporate, government, and private events.
            </p>
            {/*
                <div className="flex gap-4">
                <a href="#">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
              */}

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Services", "Portfolio", "Testimonials", "Contact"].map(item => <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(" ", "-").replace("about-us", "about")}`} className="text-white/70 hover:text-white transition-colors text-sm">
                    {item}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {["Corporate Events", "Government Events", "Live Concerts", "Trade Fairs & Expos", "Weddings", "Digital Marketing"].map(item => <li key={item}>
                  <Link to="/services" className="text-white/70 hover:text-white transition-colors text-sm">
                    {item}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">A31 BJB Nagar, Bhubaneswar<br />
                  Bhubaneswar, Odisha 751014
                </span>
              </li>
              <li>
                <a href="tel:+918249756770" className="flex gap-3 text-white/70 hover:text-white transition-colors">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">+91 8249756770</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@impavidventure.com" className="flex gap-3 text-white/70 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">info@impavidventure.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/50 text-sm text-center md:text-left">
              <p>© 2025 Impavid Venture Private Limited. All rights reserved.</p>
              <p className="mt-1">GST: 21AAECI6295G1ZL | CIN: U74999OR2017PTC027665</p>
            </div>
            <div className="flex gap-6 text-sm text-white/50">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;