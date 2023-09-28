import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, updateProduct, removeProduct } from '../redux/slices/productSlice';

import Banner from '../components/Banner';
import FormProduct from '../components/CreateProduct/FormProduct';
import TableProduct from '../components/CreateProduct/TableProduct';
import ButtonLanguage from '../components/ButtonLanguage';

const CreateProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
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
    return () => {
      document.title = "React - Paksi R";
    };
  }, []);

  const articles = {
    title: {
      id: "Buat Produk",
      en: "Create Product",
    },
    description: {
      id:
        "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
      en:
        "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.",
    },
  };

  const handleAddProduct = (newProduct) => {
    dispatch(addProduct(newProduct));
  };

  const handleUpdateProduct = (updatedProduct) => {
    dispatch(updateProduct(updatedProduct));
  };

  const handleSelectProduct = (uuid) => {
    // Set the selectedProduct in local state
    const selected = products.find((prod) => prod.uuid === uuid);
    setSelectedProduct(selected);
  };

  const handleRemoveProduct = (uuid) => {
    dispatch(removeProduct(uuid));
  };

  return (
    <>
      <main className="container">
        <ButtonLanguage />
        <Banner article={articles} />
        <FormProduct
          addProduct={handleAddProduct}
          product={selectedProduct} // Use selectedProduct from local state
          updateProduct={handleUpdateProduct}
        />
        <TableProduct
          products={products}
          selectProduct={handleSelectProduct}
          removeProduct={handleRemoveProduct}
        />
      </main>
    </>
  );
};

export default CreateProduct;
