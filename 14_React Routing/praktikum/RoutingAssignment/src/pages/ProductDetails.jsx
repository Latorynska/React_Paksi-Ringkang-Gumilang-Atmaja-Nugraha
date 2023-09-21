import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  // Extract the uuid from the URL parameters
  const { uuid } = useParams();
  const [product, setProduct] = useState(null);

  // Fetch products data from local storage on component mount
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products'));
    if (storedProducts) {
      const selectedProduct = storedProducts.find((product) => product.uuid === uuid);
      setProduct(selectedProduct);
    }
  }, []);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">Product Details</div>
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">
            <strong>UUID:</strong> {product.uuid}<br />
            <strong>Category:</strong> {product.category}<br />
            <strong>Freshness:</strong> {product.freshness}<br />
            <strong>Description:</strong> {product.description}<br />
            <strong>Price:</strong> {product.price}<br />
          </p>
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid"
            style={{ maxWidth: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
