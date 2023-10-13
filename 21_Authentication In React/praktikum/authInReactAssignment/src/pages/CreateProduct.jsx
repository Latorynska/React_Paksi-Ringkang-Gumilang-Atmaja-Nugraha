import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import Banner from '../components/Banner';
import FormProduct from '../components/CreateProduct/FormProduct';
import TableProduct from '../components/CreateProduct/TableProduct';
import ButtonLanguage from '../components/ButtonLanguage';
import { fetchProducts } from '../redux/thunks/productAPI';

const CreateProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const { loading, error } = useSelector(state => state.products);
  const [selectedProduct, setSelectedProduct] = useState({
    uuid: '',
    name: '',
    category: '',
    image: '',
    freshness: '',
    description: '',
    price: '',
  });

  useEffect(() => {
    document.title = "Create Product";
    dispatch(fetchProducts());
    return () => {
      document.title = "React - Paksi R";
    };
  }, []);
  
  useEffect(() => {
      if (loading) {
          // Show loading modal using SweetAlert
          Swal.fire({
          title: 'We\'re getting the data for you :)',
          allowOutsideClick: false, // Prevent dismissing the modal by clicking outside
          showConfirmButton: false, // Hide the confirmation button
          didOpen: () => {
              Swal.showLoading();
          }
          });
      } else {
          // Close the loading modal
          Swal.close();
      }
  }, [loading]);


  const handleSelectProduct = (uuid) => {
    const selected = products.find((prod) => prod.uuid === uuid);
    setSelectedProduct(selected);
  };

  return (
    <>
      <main className="container">
        <ButtonLanguage />
        <Banner/>
        <FormProduct
          product={selectedProduct}
        />
        <TableProduct
          selectProduct={handleSelectProduct}
        />
      </main>
    </>
  );
};

export default CreateProduct;
