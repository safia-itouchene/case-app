import React from 'react';
import { Link } from 'react-router-dom';
import { collections } from '../../data/products';

export const FeaturedCollections: React.FC = () => {
  const topCount = Math.min(2, collections.length);
  const topCollections = collections.slice(0, topCount);
  const bottomCollections = collections.slice(topCount);

  const getBottomGridCols = (count: number) => {
    if (count <= 1) return 'grid-cols-1';
    if (count === 2) return 'grid-cols-2';
    if (count === 3) return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3';
    if (count === 4) return 'grid-cols-2 md:grid-cols-4';
    return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
  };

  return (
    <section className="py-3 bg-primary-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Shop by Collection</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our curated collections designed to elevate your everyday essentials
          </p>
        </div>

        {/* Top section (up to 2 big categories) */}
        {topCollections.length > 0 && (
          <div className={`grid ${topCollections.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-3 mb-6`}>
            {topCollections.map((collection) => (
              <Link
                key={collection.id}
                to={`/collections/${collection.slug}`}
                className="relative overflow-hidden rounded-lg bg-gray-100 aspect-[16/9]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${collection.image})` }}
                >
                  <div className="absolute inset-0 bg-black/30" />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-3 pb-12">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">{collection.name}</h3>
                  <button className="px-4 py-1.5 text-sm border border-white text-white font-medium bg-transparent hover:bg-white hover:text-black transition-colors">
                    View All
                  </button>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Bottom grid (rest, responsive to count) */}
        {bottomCollections.length > 0 && (
          <div className={`grid ${getBottomGridCols(bottomCollections.length)} gap-3`}>
            {bottomCollections.map((collection) => (
              <Link
                key={collection.id}
                to={`/collections/${collection.slug}`}
                className="relative overflow-hidden rounded-lg bg-gray-100 aspect-[4/3]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${collection.image})` }}
                >
                  <div className="absolute inset-0 bg-black/30" />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-3 pb-10">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">{collection.name}</h3>
                  <button className="px-4 py-1.5 text-sm border border-white text-white font-medium bg-transparent hover:bg-white hover:text-black transition-colors">
                    View All
                  </button>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
