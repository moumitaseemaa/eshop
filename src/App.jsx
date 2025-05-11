import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import BlogPage from "./pages/BlogPage";
import CheckoutPage from "./pages/CheckoutPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="product-list" element={<ProductListPage />} />
      <Route path="product-details" element={<ProductDetailsPage />} />
      <Route path="blog" element={<BlogPage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="contact" element={<ContactPage />} />
    </Routes>
  );
};

export default App;
