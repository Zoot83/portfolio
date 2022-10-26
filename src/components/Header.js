import React from 'react';
import '../styles/Header.css';
import background from '../img/landscape.jpg';

function Header() {
  return (
    <header>
      <div
        id="intro-example"
        className="p-5 text-center bg-image img-fluid"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="mask" style={{ backgroundColor: (0, 0, 0, 0.7) }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Welcome!</h1>
              <h5 className="mb-4">
                Click on the links to learn more about me and to see my previous
                projects!
              </h5>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
