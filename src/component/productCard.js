import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHeart } from 'react-icons/fa';

const ProductCard = () => {
  return (
    <div className="col">
      <div className="card h-100" style={{ width: '18rem', height: '20rem' }}>
        <div style={{ position: 'absolute', top: 10, right: 10, color: 'white' }}>
          <FaHeart size={20} />
        </div>
        <img src="image/images_1.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a longer card with supporting text below as a natural lead-in to additional content. This content is
            a little bit longer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
