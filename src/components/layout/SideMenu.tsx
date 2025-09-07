import { X, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

import cat1 from "../../assets/collections/1.webp";
import cat2 from "../../assets/collections/2.webp";
import cat3 from "../../assets/collections/3.webp";
import cat4 from "../../assets/collections/4.webp";
import cat5 from "../../assets/collections/5.webp";

import phoneCase from "../../assets/category/22.png";
import elitePuffy from "../../assets/category/g3.avif";
import eliteMirror from "../../assets/category/g17.avif";
import sharmes from "../../assets/category/g6.webp";


// Navigation data separated for clarity
const collections = [
  { name: "Dog Friendly Office", href: "/collections/dog-friendly-office", image: cat1 },
  { name: "Samba", href: "/collections/samba", image: cat2 },
  { name: "Goddess", href: "/collections/goddess", image: cat3 },
  { name: "Balance", href: "/collections/balance", image: cat4 },
   { name: "Balance", href: "/collections/balance", image: cat5 },
];

const mainNavItems = [
  { name: "PHONE CASES", href: "/collections/phone-cases", image: phoneCase },
  { name: "ELITE PUFFY", href: "/collections/elite-puffy", image: elitePuffy },
  { name: "ELITE MIRROR", href: "/collections/elite-mirror", image: eliteMirror },
  { name: "SHARMES", href: "/collections/sharmes", image: sharmes },

];

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SideMenu = ({ isOpen, onClose }: SideMenuProps) => {
  const menuRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
      const focusableElements = menuRef.current?.querySelectorAll(
        'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements?.[0] as HTMLElement;
      const lastElement = focusableElements?.[focusableElements.length - 1] as HTMLElement;

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return;
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement?.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement?.focus();
            e.preventDefault();
          }
        }
      };
      
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      
      <nav
        ref={menuRef}
        className={`fixed top-0 left-0 h-full w-[28rem] max-w-[95vw] bg-white shadow-xl transition-transform duration-300 ease-in-out z-50 flex flex-col ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
      >
        <div className="flex justify-between items-center p-4">
            <span className="text-lg font-bold text-gray-800" >Menu</span>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition"
            aria-label="Close menu"
          >
            <X className="h-6 w-6 text-gray-800" />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto no-scrollbar">
          {/* Collections Section */}
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-sm text-gray-600">COLLECTIONS</h3>
              <Link to="/collections" onClick={onClose} className="text-sm font-semibold text-gray-800 hover:underline">
                VIEW ALL &rarr;
              </Link>
            </div>
            <div className="flex space-x-4 overflow-x-auto pb-4 no-scrollbar" >
              {collections.map((item) => (
                <Link to={item.href} key={item.name} onClick={onClose} className="flex-shrink-0 w-32 text-center">
                  <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded-md mb-2" />
                  <span className="text-sm text-gray-700">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Main Navigation */}
          <ul className="flex flex-col py-2">
            {mainNavItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className="flex items-center justify-between text-gray-800 hover:bg-gray-100 text-base transition px-4 py-3"
                  onClick={onClose}
                >
                  <div className="flex items-center">
                    <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-full mr-4" />
                    <span className="font-medium text-gray-700 text-sm">{item.name}</span>
                  </div>
                  <ChevronRight className="h-6 w-6 text-gray-400" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};