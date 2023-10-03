import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Catalogo from 'pages/Catalogo';
import Navbar from 'components/Navbar/Navbar';
import Admin from 'pages/Admin';

const Rotas = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Catalogo />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  </BrowserRouter>
);

export default Rotas;
