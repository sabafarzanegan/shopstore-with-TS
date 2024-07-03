import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";

import Layout from "./components/Layout";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
