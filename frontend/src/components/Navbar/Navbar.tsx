import { Link, NavLink } from 'react-router-dom';
import './style.css';
import 'bootstrap/js/src/collapse.js';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-primary navbar-dark main-nav">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <h4>Catalogo</h4>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#catalogo"
          aria-controls="catalog-navbar"
          aria-expanded="false"
          aria-label="toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="catalogo">
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/products">CATÁLOGO</NavLink>
            </li>
            <li>
              <NavLink to="/admin">ADMIN</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
