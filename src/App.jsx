import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Container from "./components/common/Container";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/products"
                element={<div>Products Page (Lesson 3)</div>}
              />
              <Route path="/cart" element={<div>Cart Page (Lesson 5)</div>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
