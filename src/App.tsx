import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { CollectionPage } from './pages/CollectionPage';
import { ProductPage } from './pages/ProductPage';
import { CartPage } from './pages/CartPage';
import { ContactPage } from './pages/ContactUs';
function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen">
          
          <Header />

          <main className='w-full'>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/collections/:slug" element={<CollectionPage />} />
              <Route path="/products/:id" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/wishlist" element={<div className="pt-32 pb-20 text-center"><h1 className="text-3xl font-bold">Wishlist Coming Soon</h1></div>} />
              <Route path="/account" element={<div className="pt-32 pb-20 text-center"><h1 className="text-3xl font-bold">Account Coming Soon</h1></div>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;