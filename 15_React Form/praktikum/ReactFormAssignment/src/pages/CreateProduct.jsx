import React, { useEffect, useState } from 'react';

import Banner from '../components/Banner';
import FormProduct from '../components/CreateProduct/FormProduct';
import TableProduct from '../components/CreateProduct/TableProduct';
import ButtonLanguage from '../components/ButtonLanguage';

const CreateProduct = () => {
  const [language, setLanguage] = useState('en');
  const [products, setProducts] = useState(() => {
    // Initialize state from localStorage or with an empty array
    const storedProducts = JSON.parse(localStorage.getItem('products'));
    return storedProducts || [];
  });
  const [product, setProduct] = useState({
    uuid: '',
    name: '',
    category: '',
    image: '',
    freshness: '',
    description: '',
    price: '',
  });

  // Load products data from localStorage on component mount
  useEffect(() => {
    document.title = "Create Product";
    return () => {
      document.title = "React Fundamental - Paksi R";
    };
  }, []);

  // Save products data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const addProduct = (newProduct) => {
    // Update the products state and save to localStorage
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
  };

  const updateProduct = (updatedProduct) => {
    // Update the products state and save to localStorage
    const updatedProducts = products.map((prod) =>
      prod.uuid === updatedProduct.uuid ? updatedProduct : prod
    );
    setProducts(updatedProducts);
  };

  const selectProduct = (uuid) => {
    const selectedProduct = products.find((prod) => prod.uuid === uuid);
    if (selectedProduct) {
      setProduct(selectedProduct);
    }
  };

  const removeProduct = (uuid) => {
    // Update the products state and save to localStorage
    const updatedProducts = products.filter((prod) => prod.uuid !== uuid);
    setProducts(updatedProducts);
  };

  const articles = {
    title: {
      id: "Buat Produk",
      en: "Create Product"
    },
    description: {
      id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
      en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it."
    }
  };

  return (
    <>
      <main className="container">
        <ButtonLanguage language={language} setLanguage={setLanguage} />
        <Banner article={articles} language={language} />
        <FormProduct addProduct={addProduct} product={product} updateProduct={updateProduct} />
        <TableProduct products={products} selectProduct={selectProduct} removeProduct={removeProduct} />
      </main>
    </>
  );
};

export default CreateProduct;
