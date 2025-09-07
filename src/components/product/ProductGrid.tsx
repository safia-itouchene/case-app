import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, ShoppingBag } from 'lucide-react';
import type{ Product } from '../../types';
import { useCart } from '../../context/CartContext';

interface ProductGridProps {
  products: Product[];
  loading?: boolean;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, loading }) => {
  const { addItem } = useCart();

  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.colors[0]);
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-card overflow-hidden">
            <div className="aspect-square bg-gray-200 animate-pulse" />
            <div className="p-6 space-y-3">
              <div className="h-4 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse" />
              <div className="h-6 bg-gray-200 rounded w-1/3 animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">No products found</h3>
        <p className="text-gray-600 mb-8">Try adjusting your filters or search terms</p>
        <Link
          to="/"
          className="inline-block bg-accent-hotpink text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors"
        >
          Browse All Products
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.map((product) => (
        <div key={product.id} className="group relative bg-white rounded-2xl shadow-card hover:shadow-premium transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
          {/* Product badges */}
          <div className="absolute top-4 left-4 z-10 flex flex-col space-y-2">
            {product.isNew && (
              <span className="bg-accent-hotpink text-white text-xs font-semibold px-2 py-1 rounded-full">
                New
              </span>
            )}
            {product.isBestSeller && (
              <span className="bg-accent-gold text-white text-xs font-semibold px-2 py-1 rounded-full">
                Best Seller
              </span>
            )}
            {product.originalPrice && (
              <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                Sale
              </span>
            )}
          </div>

          {/* Wishlist button */}
          <button className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white">
            <Heart className="h-5 w-5 text-gray-600 hover:text-accent-hotpink transition-colors" />
          </button>

          {/* Quick add button */}
          <button
            onClick={(e) => handleQuickAdd(product, e)}
            className="absolute bottom-4 right-4 z-10 p-3 rounded-full bg-accent-hotpink text-white opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-pink-600 hover:scale-110"
          >
            <ShoppingBag className="h-5 w-5" />
          </button>

          {/* Product image */}
          <Link to={`/products/${product.id}`} className="block">
            <div className="aspect-square overflow-hidden">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>

          {/* Product info */}
          <div className="p-6">
            <Link to={`/products/${product.id}`}>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-accent-hotpink transition-colors line-clamp-2">
                {product.name}
              </h3>
            </Link>

            {/* Rating */}
            <div className="flex items-center space-x-1 mb-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">({product.reviewCount})</span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold text-gray-900">${product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
              )}
            </div>

            {/* Color options */}
            <div className="flex items-center space-x-2">
              {product.colors.slice(0, 4).map((color, index) => (
                <div
                  key={index}
                  className="w-6 h-6 rounded-full border-2 border-gray-200 flex-shrink-0"
                  style={{
                    backgroundColor: color.toLowerCase().includes('pink') ? '#FFB6C1' :
                                   color.toLowerCase().includes('gold') ? '#D4AF37' :
                                   color.toLowerCase().includes('black') ? '#000000' :
                                   color.toLowerCase().includes('white') ? '#FFFFFF' :
                                   color.toLowerCase().includes('clear') ? '#F9FAFB' :
                                   color.toLowerCase().includes('sage') ? '#87A96B' :
                                   color.toLowerCase().includes('rose') ? '#E91E63' :
                                   color.toLowerCase().includes('marble') ? '#F5F5F5' : '#E5E7EB'
                  }}
                />
              ))}
              {product.colors.length > 4 && (
                <span className="text-xs text-gray-500">+{product.colors.length - 4}</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};