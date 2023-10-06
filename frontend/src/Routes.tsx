import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Catalogo from 'pages/Catalogo';
import Navbar from 'components/Navbar/Navbar';
import Admin from 'pages/Admin';
import ProductDetails from 'pages/ProductDetails';

const Rotas = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Catalogo />} />
      <Route path="/products/:productId" element={<ProductDetails />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  </BrowserRouter>
);

export default Rotas;
