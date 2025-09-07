import { Search, ShoppingBag, User, Menu, Bell } from "lucide-react";
import { useState, useEffect, memo } from "react";
import { Link } from "react-router-dom";
import { SideMenu } from "./SideMenu";
import { SearchOverlay } from "./SearchOverlay";
import logo from "../../assets/logo.avif";
import { useCart } from "../../context/CartContext";

const HeaderComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const { itemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 h-[100px] z-40 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-white"
        } flex items-center justify-between px-4`}
      >
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 rounded-full hover:bg-gray-100 transition"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6 text-gray-800" />
          </button>
          <button
            onClick={() => setIsSearchOpen(true)}
            className="p-2 rounded-full hover:bg-gray-100 transition"
            aria-label="Open search"
          >
            <Search className="h-5 w-5 text-gray-800" />
          </button>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <Link to="/" aria-label="Home">
            <img src={logo} alt="Brand Logo" className="h-8 md:h-9" />
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            to="/design"
            className="hidden lg:block text-sm font-medium text-gray-700 hover:text-gray-900 transition"
          >
            Design Your Case
          </Link>

          <Link
            to="/design"
            className="lg:hidden px-3 py-1.5 rounded-full bg-gray-900 text-white text-xs font-medium hover:bg-black transition"
            aria-label="Design your case"
          >
            Design
          </Link>

          <Link
            to="/notifications"
            className="hidden sm:block p-2 rounded-full hover:bg-gray-100 transition"
            aria-label="Notifications"
          >
            <Bell className="h-6 w-6 text-gray-700" />
          </Link>
          <Link
            to="/account"
            className="p-2 rounded-full hover:bg-gray-100 transition"
            aria-label="My Account"
          >
            <User className="h-6 w-6 text-gray-700" />
          </Link>

          {/* Cart with live count badge */}
          <Link
            to="/cart"
            className="relative p-2 rounded-full hover:bg-gray-100 transition"
            aria-label={`Shopping cart${itemCount ? `, ${itemCount} item${itemCount > 1 ? "s" : ""}` : ""}`}
          >
            <ShoppingBag className="h-6 w-6 text-gray-700" />
            {itemCount > 0 && (
              <span
                className="absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full bg-red-600 text-white text-[10px] leading-5 text-center font-bold"
                aria-live="polite"
              >
                {itemCount > 99 ? "99+" : itemCount}
              </span>
            )}
          </Link>
        </div>
      </header>

      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export const Header = memo(HeaderComponent);
export default Header;