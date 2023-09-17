import React, { useState, useEffect } from 'react';

import Banner from '../components/Banner';
import FormProduct from '../components/CreateProduct/FormProduct';
import TableProduct from '../components/CreateProduct/TableProduct';
import ButtonLanguage from '../components/ButtonLanguage';

const CreateProduct = () => {

    const [language, setLanguage] = useState('en');
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({
        uuid: '',
        name: '',
        category: '',
        image: '',
        freshness: '',
        description: '',
        price: '',
    });
    const [articles, setArticles] = useState({
    title: {
        id: '',
        en: '',
    },
    description: {
        id: '',
        en: '',
    },
    });

    useEffect(() => {
        document.title = "Create Product";
        setArticles({
            title: {
                id: "Buat Produk",
                en: "Create Product"
            },
            description: {
                id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
                en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it."
            }
            });

        return () => {
            document.title = "React Fundamental - Paksi R";
        };
    }, []);

    const addProduct = (newProduct) => {
        setProducts((prevProducts) => [...prevProducts, newProduct]);
    }
    const updateProduct = (updatedProduct) => {
        // Find the index of the product to update
        const index = products.findIndex((product) => product.uuid === updatedProduct.uuid);
        if (index !== -1) {
            // Update the product in the products array
            const updatedProducts = [...products];
            updatedProducts[index] = updatedProduct;
            setProducts(updatedProducts);
        }
    };
    const selectProduct = (uuid) => {
        const selectedProduct = products.find((product) => product.uuid === uuid);
        if (selectedProduct) {
          setProduct(selectedProduct);
        }
    };
    const removeProduct = (uuid) => {
        const updatedProducts = products.filter((product) => product.uuid !== uuid);
        setProducts(updatedProducts);
    };
      
    return (
    <>
        <ButtonLanguage language={language} setLanguage={setLanguage} />
        <Banner article={articles} language={language} />
        <FormProduct addProduct={addProduct} product={product} updateProduct={updateProduct} />
        <TableProduct products={products} selectProduct={selectProduct} removeProduct={removeProduct} />
    </>
    );
};

export default CreateProduct;
