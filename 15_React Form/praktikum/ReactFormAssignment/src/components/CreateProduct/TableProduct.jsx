import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const TableProduct = ({ products, selectProduct, removeProduct }) => {

  const handleUpdate = (uuid) => {
    selectProduct(uuid);
  };
  const handleDelete = (uuid) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this product!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        removeProduct(uuid);
        Swal.fire('Deleted!', 'Your product has been deleted.', 'success');
      }
    });
  };
  return (
    <>
      <div className="row">
        <h1 className="text-center">List Product</h1>
      </div>
      <div className="row">
        <div className="col-12">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>UUID</th>
                <th>Product Name</th>
                <th>Product Category</th>
                <th>Product Freshness</th>
                <th>Product Image</th>
                <th>Additional Description</th>
                <th>Product Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody id="table-body">
              {products.map((product) => (
                <tr key={product.uuid}>
                  <td>
                    <Link to={`/product-details/${product.uuid}`}>
                      {product.uuid}
                    </Link>
                  </td>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.freshness}</td>
                  <td><img src={product.image} alt={product.name} width='30%'/></td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>
                    <div className="d-flex justify-content-between">
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(product.uuid)}
                      >
                        Delete
                      </button>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => handleUpdate(product.uuid)}
                      >
                        Update
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="container row">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            id="search"
            placeholder="Search by Product Name"
          />
        </div>
      </div>
    </>
  );
};

export default TableProduct;
