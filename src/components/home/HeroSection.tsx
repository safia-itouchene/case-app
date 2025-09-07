import { Link } from "react-router-dom";
import heroDesktop from "../../assets/hero/HERO.jpg"; // big screen image
import heroMobile from "../../assets/hero/2.jpg";   // small screen image

export type HeroSectionProps = {
  desktopSrc?: string;
  mobileSrc?: string;
};

export const HeroSection = ({
  desktopSrc = heroDesktop,
  mobileSrc = heroMobile,
}: HeroSectionProps) => {
  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      aria-label="Hero section"
    >
      <picture>
        {/* Use desktop image on medium/large screens */}
        <source media="(min-width: 768px)" srcSet={desktopSrc} />
        {/* Fallback for small screens */}
        <img
          src={mobileSrc}
          alt="Summer cherry collection hero"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </picture>

      {/* Overlay gradient for contrast */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent md:from-black/60 md:via-black/25 pointer-events-none"
        aria-hidden="true"
      />

      {/* Centered Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-3xl px-6 text-center">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 ring-1 ring-white/25 backdrop-blur">
        New • Season Drop
          </span>
          <h1 className="mt-3 text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-white drop-shadow">
        Discover the new season collection
          </h1>
          <p id="hero-desc" className="mt-3 text-white/90 md:text-lg">
        Explore curated styles and limited drops handpicked for you
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          to="/"
          aria-describedby="hero-desc"
          className="group inline-flex items-center justify-center rounded-full bg-white px-8 py-3 font-medium text-black shadow-lg shadow-black/30 transition hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40"
        >
          Shop the new season
        </Link>

        <Link
          to="/design"
          className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white/10 px-8 py-3 font-medium text-white backdrop-blur transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40"
        >
          Design your own
        </Link>
          </div>
        </div>
      </div>
    </section>
  );
};