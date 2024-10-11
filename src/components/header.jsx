import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark text-light">
      <div className="container-fluid ">
        {/* Project Name */}
        <Link class="nav-link active" aria-current="page" to="/">
          Tech-Shop
        </Link>


        <div className="d-flex align-items-center">
           {/* Search Input */}
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
            <button className="btn text-light" type="submit">
                <i class="fa-solid fa-magnifying-glass"></i>
              
            </button>
          

          {/* Icons */}
          
            {/* Cart Icon */}
            <Link class="nav-link active" aria-current="page" to="/">
              <i className="bi bi-cart3 mx-5" style={{ fontSize: '1.5rem' }}></i>
            </Link>

            {/* User Icon */}
            <Link class="nav-link active" aria-current="page" to="/">
              <i className="bi bi-person" style={{ fontSize: '1.5rem' }}></i>
            </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
