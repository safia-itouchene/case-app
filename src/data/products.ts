import type { Product, Collection } from '../types';
import c1 from '../assets/4.jpg'
import c2 from '../assets/3.jpg'
import c3 from '../assets/2.jpg'
import c4 from '../assets/1.jpg'
import c5 from '../assets/5.jpg'
export const collections: Collection[] = [
  {
    id: '1',
    name: 'Phone Cases',
    description: 'Protective style for your most essential device',
    image: c1,
    productCount: 156,
    slug: 'phone-cases'
  },
  {
    id: '2',
    name: 'Tech Accessories',
    description: 'Elevate your tech game with premium accessories',
    image: c2,
    productCount: 89,
    slug: 'tech-accessories'
  },
  {
    id: '3',
    name: 'Drinkware',
    description: 'Stay hydrated in style with our curated collection',
    image: c3,
    productCount: 67,
    slug: 'drinkware'
  },
  {
    id: '4',
    name: 'Lifestyle',
    description: 'Complete your look with fashionable lifestyle pieces',
    image: c4,
    productCount: 43,
    slug: 'lifestyle'
  }
  ,
  {
    id: '5',
    name: 'Lifestyle',
    description: 'Complete your look with fashionable lifestyle pieces',
    image: c5,
    productCount: 43,
    slug: 'lifestyle'
  }
  
];

import img1 from '../assets/products/1.png';
import img2 from '../assets/products/2.png';
import img3 from '../assets/products/3.png';
import img4 from '../assets/products/4.png';  
import img5 from '../assets/products/f1.webp';
import img6 from '../assets/products/f2.webp';
import img7 from '../assets/products/f3.webp';
import img8 from '../assets/products/f4.webp';
import img9 from '../assets/products/f5.webp';
export const products: Product[] = [
  {
    id: '1',
    name: 'Sunset Gradient Phone Case',
    price: 29.99,
    originalPrice: 39.99,
    images: [
      img5
    ],
    category: 'Phone Cases',
    rating: 4.8,
    reviewCount: 324,
    colors: ['Pink', 'Orange', 'Purple'],
    description: 'Protect your phone in style with our gorgeous sunset gradient case. Made from premium materials for ultimate protection.',
    features: ['Drop protection up to 6ft', 'Wireless charging compatible', 'Anti-yellowing material', 'Precise cutouts'],
    inStock: true,
    isNew: true,
    compatibility: ['iPhone 15', 'iPhone 14', 'iPhone 13']
  },
  {
    id: '2',
    name: 'Crystal Clear Protective Case',
    price: 24.99,
    images: [
      img6
    ],
    category: 'Phone Cases',
    rating: 4.6,
    reviewCount: 189,
    colors: ['Clear', 'Rose Gold', 'Silver'],
    description: 'Show off your phone\'s natural beauty while keeping it protected with our crystal clear case.',
    features: ['Military-grade protection', 'Crystal clear transparency', 'Easy installation', 'Lifetime warranty'],
    inStock: true,
    isBestSeller: true,
    compatibility: ['iPhone 15', 'Samsung Galaxy S24']
  },
  {
    id: '3',
    name: 'Marble Luxe Case',
    price: 34.99,
    images: [
      img7
    ],
    category: 'Phone Cases',
    rating: 4.9,
    reviewCount: 267,
    colors: ['White Marble', 'Black Marble', 'Rose Gold Marble'],
    description: 'Elegant marble design meets superior protection in this luxurious case.',
    features: ['Real marble appearance', 'Shock absorption', 'Raised edges', 'Premium finish'],
    inStock: true,
    isBestSeller: true,
    compatibility: ['iPhone 15 Pro', 'iPhone 14 Pro']
  },
  {
    id: '4',
    name: 'Wireless Charging Stand',
    price: 49.99,
    images: [
      img8
    ],
    category: 'Tech Accessories',
    rating: 4.7,
    reviewCount: 156,
    colors: ['White', 'Black', 'Rose Gold'],
    description: 'Fast wireless charging with premium design that complements any space.',
    features: ['15W fast charging', 'Universal compatibility', 'LED indicator', 'Non-slip base'],
    inStock: true,
    isBestSeller: true,
    compatibility: ['All Qi-enabled devices']
  },
  {
    id: '5',
    name: 'Stainless Steel Tumbler',
    price: 28.99,
    images: [
      img5
    ],
    category: 'Drinkware',
    rating: 4.8,
    reviewCount: 89,
    colors: ['Rose Gold', 'Matte Black', 'Sage Green'],
    description: 'Keep your drinks at the perfect temperature with our premium insulated tumbler.',
    features: ['24-hour cold retention', '12-hour hot retention', 'Spill-proof lid', 'Easy-grip design'],
    inStock: true,
    isBestSeller: true,
    compatibility: []
  },
  {
    id: '6',
    name: 'Designer Tote Bag',
    price: 79.99,
    originalPrice: 99.99,
    images: [
      img1
    ],
    category: 'Lifestyle',
    rating: 4.5,
    reviewCount: 124,
    colors: ['Blush Pink', 'Cream', 'Camel'],
    description: 'Spacious and stylish tote bag perfect for work, travel, or everyday use.',
    features: ['Premium vegan leather', 'Multiple compartments', 'Laptop sleeve included', 'Removable pouch'],
    inStock: true,
    compatibility: []
  },
  {
    id: '7',
    name: 'Crystal Clear Protective Case',
    price: 24.99,
    images: [
      img4
    ],
    category: 'Phone Cases',
    rating: 4.6,
    reviewCount: 189,
    colors: ['Clear', 'Rose Gold', 'Silver'],
    description: 'Show off your phone\'s natural beauty while keeping it protected with our crystal clear case.',
    features: ['Military-grade protection', 'Crystal clear transparency', 'Easy installation', 'Lifetime warranty'],
    inStock: true,
    isBestSeller: true,
    compatibility: ['iPhone 15', 'Samsung Galaxy S24']
  },
  {
    id: '8',
    name: 'Marble Luxe Case',
    price: 34.99,
    images: [
      img9
    ],
    category: 'Phone Cases',
    rating: 4.9,
    reviewCount: 267,
    colors: ['White Marble', 'Black Marble', 'Rose Gold Marble'],
    description: 'Elegant marble design meets superior protection in this luxurious case.',
    features: ['Real marble appearance', 'Shock absorption', 'Raised edges', 'Premium finish'],
    inStock: true,
    isBestSeller: true,
    compatibility: ['iPhone 15 Pro', 'iPhone 14 Pro']
  },
  {
    id: '9',
    name: 'Wireless Charging Stand',
    price: 49.99,
    images: [
      img3
    ],
    category: 'Tech Accessories',
    rating: 4.7,
    reviewCount: 156,
    colors: ['White', 'Black', 'Rose Gold'],
    description: 'Fast wireless charging with premium design that complements any space.',
    features: ['15W fast charging', 'Universal compatibility', 'LED indicator', 'Non-slip base'],
    inStock: true,
    isBestSeller: true,
    compatibility: ['All Qi-enabled devices']
  },
  {
    id: '10',
    name: 'Stainless Steel Tumbler',
    price: 28.99,
    images: [
      img2
    ],
    category: 'Drinkware',
    rating: 4.8,
    reviewCount: 89,
    colors: ['Rose Gold', 'Matte Black', 'Sage Green'],
    description: 'Keep your drinks at the perfect temperature with our premium insulated tumbler.',
    features: ['24-hour cold retention', '12-hour hot retention', 'Spill-proof lid', 'Easy-grip design'],
    inStock: true,
    isBestSeller: true,
    compatibility: []
  },
];

export const featuredProducts = products.filter(p => p.isBestSeller || p.isNew);
export const bestSellers = products.filter(p => p.isBestSeller);
export const newArrivals = products.filter(p => p.isNew);