import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react'; // cart icon
import { bestSellers } from '../../data/products';
import { useCart } from '../../context/CartContext';

export const BestSellers: React.FC = () => {
  const { addItem } = useCart();

  const handleQuickAdd = (product: any) => {
    addItem(product, product.colors[0]);
  };

  return (
    <section className="bg-primary-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-5">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Summer Collection</h2>
            <p className="text-xl text-gray-600">
              Customer favorites that keep selling out
            </p>
          </div>
          <Link
            to="/collections/best-sellers"
            className="hidden md:inline-block text-accent-hotpink hover:text-pink-600 font-semibold transition-colors"
          >
            View All →
          </Link>
        </div>

        {/* Grid of product cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {bestSellers.slice(0, 8).map((product) => (
            <div key={product.id} className="flex flex-col h-full">
              {/* Product image */}
              <Link to={`/products/${product.id}`} className="block w-full">
                <div className="aspect-[3/4] flex items-center justify-center">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="max-h-80 object-contain"
                  />
                </div>
              </Link>

              {/* Product info */}
                <div className="mt-4 flex-1 flex flex-col">
                <Link to={`/products/${product.id}`}>
                  <h3 className="text-lg font-semibold text-gray-900 hover:text-accent-hotpink transition-colors min-h-[2.8rem] text-center">
                  {product.name}
                  </h3>
                </Link>

                <p className="text-sm text-gray-500 mt-1 min-h-[1.25rem] text-center">
                  iPhone 16 Pro Max Case • Tough (MagSafe)
                </p>

                {/* Price centered, cart on right pinned to bottom */}
                <div className="mt-auto mt-[10px] flex justify-between w-full">
                  <p className="flex-1 text-center text-lg font-bold text-gray-900">
                  ${product.price}
                  </p>
                  <button
                  onClick={() => handleQuickAdd(product)}
                  className="hover:text-accent-hotpink transition text-gray-400 ml-auto"
                  >
                  <ShoppingBag className="h-5 w-5" />
                  </button>
                </div>
                </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Link
            to="/collections/best-sellers"
            className="inline-block bg-accent-hotpink text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors"
          >
            View All Best Sellers
          </Link>
        </div>
      </div>
    </section>
  );
};