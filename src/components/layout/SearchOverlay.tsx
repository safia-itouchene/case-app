import { X, Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

// Mock data to simulate search suggestions
const popularSearches = [
  "Phone Cases",
  "Wireless Chargers",
  "Bluetooth Headphones",
  "Smartwatch Bands",
];

const recentSearches = [
  "MagSafe Power Banks",
  "USB-C Cables",
  "Screen Protectors",
];

export const SearchOverlay = ({ isOpen, onClose }: SearchOverlayProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      // Small delay to allow the slide-in animation to start before focusing
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      // Use a timeout to wait for the slide-out animation to finish before unmounting
      const timeout = setTimeout(() => setShow(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-transparent backdrop-blur-sm transition-transform duration-300 ease-in-out transform ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-2xl mx-auto mt-16 px-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-4 bg-white border border-gray-300 rounded-full shadow-lg p-2 sm:p-3">
          <Search className="h-5 w-5 text-gray-400 ml-2" />
          <input
            ref={inputRef}
            type="text"
            className="flex-1 border-0 focus:ring-0 text-gray-800 placeholder-gray-500 bg-transparent text-sm sm:text-base"
            placeholder="Search for products, brands, and more..."
          />
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition"
            aria-label="Close search"
          >
            <X className="h-5 w-5 text-gray-800" />
          </button>
        </div>

        {/* Search Suggestions and Results */}
        <div className="mt-8">
          {/* Popular Searches Section */}
          <div className="mb-8">
            <h3 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Popular Searches
            </h3>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((term) => (
                <button
                  key={term}
                  className="px-4 py-2 text-sm rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>

          {/* Recent Searches Section */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Recent Searches
            </h3>
            <div className="flex flex-wrap gap-2">
              {recentSearches.map((term) => (
                <button
                  key={term}
                  className="px-4 py-2 text-sm rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 transition"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>

          {/* Placeholder for search results */}
          
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Results</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               Render search results here. Example: *
              
              <a href="#" className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition">
                <img src="..." alt="Product" className="w-12 h-12 rounded-lg" />
                <div>
                  <div className="font-medium text-gray-800">Product Name</div>
                  <div className="text-sm text-gray-500">$99.99</div>
                </div>
              </a>

            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
