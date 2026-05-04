import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route
              path="/cart"
              element={
                <div className="p-10 text-center">Cart Page (Lesson 5)</div>
              }
            />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route
              path="/wishlist"
              element={
                <div className="p-10 text-center">Wishlist Page (Lesson 5)</div>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
