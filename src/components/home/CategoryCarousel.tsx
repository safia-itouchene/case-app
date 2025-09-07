import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  { name: "Phone Cases", image: "/category/g1.webp" },
  { name: "Power Banks", image: "/category/22.png" },
  { name: "Chargers", image: "/category/g2.avif" },
  { name: "Headphones", image: "/category/g3.avif" },
  { name: "Drinkware", image: "/category/g4.avif" },
  { name: "Cables", image: "/category/g5.webp" },
  { name: "Stands", image: "/category/g18.avif" },
  { name: "Speakers", image: "/category/g6.webp" },
  { name: "Gadgets", image: "/category/g7.avif" },
  { name: "Lifestyle", image: "/category/g8.avif" },
  { name: "Tech Accessories", image: "/category/g9.avif" },
  { name: "Wearables", image: "/category/g11.avif" },
  { name: "Laptops", image: "/category/g13.avif" },
  { name: "Desktops", image: "/category/g14.avif" },
  { name: "Monitors", image: "/category/g15.avif" },
  { name: "Cameras", image: "/category/g16.avif" },
  { name: "Drones", image: "/category/g17.avif" },
];

export const CategoryCarousel: React.FC = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -280 : 280,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="
        sticky 
        top-[100px]   /* ✅ accounts for header + mobile logo */
        md:top-[70px] /* ✅ desktop: header only */
        z-40 bg-white/95 backdrop-blur-md border-b border-gray-200
      "
    >
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Left button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full shadow-sm bg-white hover:bg-gray-100 transition hidden md:flex"
        >
          <ChevronLeft className="h-5 w-5 text-gray-700" />
        </button>

        {/* Scrollable list */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto overflow-y-hidden space-x-6 px-2 md:px-12 py-3 scrollbar-hide scroll-smooth"
        >
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center min-w-[70px] group cursor-pointer"
            >
              <div className="relative w-[58px] h-[58px] md:w-[64px] md:h-[64px] rounded-full overflow-hidden bg-gray-100 flex items-center justify-center shadow-sm border border-gray-100 group-hover:border-accent-hotpink group-hover:shadow-md transition">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="mt-2 text-[11px] md:text-xs font-medium text-gray-700 group-hover:text-accent-hotpink transition text-center">
                {cat.name}
              </span>
            </div>
          ))}
        </div>

        {/* Right button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full shadow-sm bg-white hover:bg-gray-100 transition hidden md:flex"
        >
          <ChevronRight className="h-5 w-5 text-gray-700" />
        </button>
      </div>
    </div>
  );
};
