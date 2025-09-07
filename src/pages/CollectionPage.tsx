import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Filter, ChevronDown, ShoppingBag } from 'lucide-react';
import { collections, products } from '../data/products';
import { useCart } from '../context/CartContext';

export const CollectionPage: React.FC = () => {
  const { slug } = useParams();
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const { addItem } = useCart();

  const collection = collections.find(c => c.slug === slug);

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      if (slug === 'new-arrivals') return product.isNew;
      if (slug === 'best-sellers') return product.isBestSeller;
      return product.category === collection?.name;
    });

    filtered = filtered.filter(product =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    if (selectedColors.length > 0) {
      filtered = filtered.filter(product =>
        product.colors.some(color => selectedColors.includes(color))
      );
    }

    switch (sortBy) {
      case 'price-low':
        return filtered.sort((a, b) => a.price - b.price);
      case 'price-high':
        return filtered.sort((a, b) => b.price - a.price);
      case 'rating':
        return filtered.sort((a, b) => b.rating - a.rating);
      case 'newest':
        return filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
      default:
        return filtered;
    }
  }, [slug, collection, sortBy, priceRange, selectedColors]);

  const allColors = Array.from(new Set(products.flatMap(p => p.colors)));

  if (!collection && !['new-arrivals', 'best-sellers'].includes(slug || '')) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Collection Not Found</h1>
        <p className="text-gray-600">The collection you're looking for doesn't exist.</p>
      </div>
    );
  }

  const pageTitle = slug === 'new-arrivals' ? 'New Arrivals' :
                   slug === 'best-sellers' ? 'Best Sellers' :
                   collection?.name;

  const pageDescription = slug === 'new-arrivals' ? 'Discover our latest additions' :
                         slug === 'best-sellers' ? 'Customer favorites that keep selling out' :
                         collection?.description;

  const handleQuickAdd = (product: any) => {
    addItem(product, product.colors[0]); // default to first color
  };

  return (
          

    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Collection Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{pageTitle}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{pageDescription}</p>
          <div className="mt-6">
            <span className="text-gray-500">{filteredProducts.length} products</span>
          </div>
        </div>
        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
          >
            <Filter className="h-5 w-5" />
            <span>Filters</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-accent-hotpink focus:border-accent-hotpink"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Price Range */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Price Range</h3>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Colors */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Colors</h3>
                <div className="grid grid-cols-4 gap-3">
                  {allColors.slice(0, 8).map((color) => (
                    <button
                      key={color}
                      onClick={() => {
                        setSelectedColors(prev =>
                          prev.includes(color)
                            ? prev.filter(c => c !== color)
                            : [...prev, color]
                        );
                      }}
                      className={`relative w-8 h-8 rounded-full border-2 ${
                        selectedColors.includes(color) ? 'border-accent-hotpink' : 'border-gray-300'
                      }`}
                      style={{
                        backgroundColor: color.toLowerCase().includes('pink') ? '#FFB6C1' :
                                       color.toLowerCase().includes('gold') ? '#D4AF37' :
                                       color.toLowerCase().includes('black') ? '#000000' :
                                       color.toLowerCase().includes('white') ? '#FFFFFF' :
                                       color.toLowerCase().includes('clear') ? '#F9FAFB' : '#E5E7EB'
                      }}
                    >
                      {selectedColors.includes(color) && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-3 h-3 bg-white rounded-full" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <div className="flex items-end">
                <button
                  onClick={() => {
                    setPriceRange([0, 100]);
                    setSelectedColors([]);
                    setSortBy('featured');
                  }}
                  className="text-accent-hotpink hover:text-pink-600 font-semibold transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Products Grid with Cart */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
          {filteredProducts.map((product) => (
            <div key={product.id} className="flex flex-col items-center text-center">
              <Link to={`/products/${product.id}`} className="block w-full">
                <div className="aspect-[3/4] flex items-center justify-center">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="max-h-80 object-contain"
                  />
                </div>
              </Link>
              <div className="mt-4 w-full">
                <Link to={`/products/${product.id}`}>
                  <h3 className="text-lg font-semibold text-gray-900 hover:text-accent-hotpink transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-sm text-gray-500 mt-1">
                  {product.category} • {product.colors[0]}
                </p>
                <div className="flex items-center mt-2">
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
      </div>
    </div>
  );
};
