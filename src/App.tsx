import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";

import Layout from "./components/Layout";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import { AppProvider } from "./Context/AppContext";

function App() {
  return (
    <AppProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Layout>
    </AppProvider>
  );
}

export default App;
