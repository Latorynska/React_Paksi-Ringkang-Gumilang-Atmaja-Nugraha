import React from 'react';
import { useLocation } from 'react-router-dom';

const ProductDetails = () => {
  const { state } = useLocation();
  const product = state?.product || null;

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">Product Details</div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">
                <strong>UUID:</strong> {product.uuid}<br />
                <strong>Category:</strong> {product.category}<br />
                <strong>Freshness:</strong> {product.freshness}<br />
                <strong>Description:</strong> {product.description}<br />
                <strong>Price:</strong> {product.price}<br />
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={product.image}
                alt={product.name}
                className="img-fluid"
                style={{ maxWidth: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
