import Link from "next/link";
import Image from "next/image";
import { Globe, Camera, Briefcase, MessageCircle } from "lucide-react"; // Placeholders for social media

const FOOTER_LINKS = {
  quick: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Study Destinations", href: "/destinations" },
    { name: "Services", href: "/services" },
    { name: "Universities", href: "/universities" },
    { name: "Contact", href: "/contact" },
  ],
  destinations: [
    { name: "United Kingdom", href: "/destinations#uk" },
    { name: "Australia", href: "/destinations#australia" },
    { name: "Canada", href: "/destinations#canada" },
    { name: "Europe", href: "/destinations#europe" },
    { name: "Japan", href: "/destinations#japan" },
    { name: "Asia", href: "/destinations#asia" },
  ]
};

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-300 pt-16 pb-8">
      <div className="max-w-[1560px] mx-auto px-3 sm:px-5 lg:px-7">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Description */}
          <div className="space-y-6 lg:col-span-1">
            <Link href="/" className="flex flex-col items-start gap-1 group inline-flex">
              <Image
                src="/ast-logo.png"
                alt="AST Abroad Study & Travel"
                width={160}
                height={45}
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
              <span className="text-[10px] font-bold text-bright-gold uppercase tracking-wider pl-1">Abroad Study & Travel</span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              AST (Abroad Study and Travel) is a premier overseas education and travel consultancy helping students realize their global study ambitions with trusted guidance and personalized support.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-bright-gold hover:text-navy transition-colors text-white">
                <Globe className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-bright-gold hover:text-navy transition-colors text-white">
                <Camera className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-bright-gold hover:text-navy transition-colors text-white">
                <Briefcase className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-bright-gold hover:text-navy transition-colors text-white">
                <MessageCircle className="w-5 h-5" />
                <span className="sr-only">WhatsApp</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.quick.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-bright-gold transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Study Destinations */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Study Destinations</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.destinations.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-bright-gold transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            
            <div className="space-y-6">
              {/* Sri Lanka Office */}
              <ul className="space-y-3 text-sm">
                <li className="flex flex-col">
                  <span className="text-bright-gold mb-1 font-semibold">Sri Lanka (Head Office)</span>
                  <a href="tel:+94760344695" className="text-white font-medium hover:text-bright-gold transition-colors">
                    +94 76 034 4695
                  </a>
                </li>
                <li className="flex flex-col">
                  <a href="mailto:adhigroupofcompany@gmail.com" className="text-white font-medium hover:text-bright-gold transition-colors break-all">
                    adhigroupofcompany@gmail.com
                  </a>
                </li>
                <li className="flex flex-col">
                  <span className="text-gray-400">
                    Chankanai East, Chankanai,<br />
                    Jaffna, Sri Lanka
                  </span>
                </li>
              </ul>

              {/* India Office */}
              <ul className="space-y-3 text-sm">
                <li className="flex flex-col">
                  <span className="text-bright-gold mb-1 font-semibold">India Branch</span>
                  <a href="tel:+917305314877" className="text-white font-medium hover:text-bright-gold transition-colors">
                    +91 7305314877
                  </a>
                </li>
                <li className="flex flex-col">
                  <span className="text-gray-400">
                    38/21, G-1, Rajeshwari nagar,<br />
                    Thanjavur - 613005,<br />
                    Tamil Nadu, India.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} AST Abroad Study and Travel. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
