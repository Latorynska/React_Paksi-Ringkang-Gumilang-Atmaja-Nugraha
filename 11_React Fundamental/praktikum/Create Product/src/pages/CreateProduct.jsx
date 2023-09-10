import { useEffect, useState } from 'react';

import Header from '../components/Header';
import Banner from '../components/Banner';
import FormProduct from '../components/FormProduct';
import TableProduct from '../components/TableProduct';
import ModalProduct from '../components/ModalProduct';
import Footer from '../components/Footer';
import Container from '../components/Container';



const CreateProduct = () => {
    useEffect(() => {
        document.title = "Create Product";
        return (() => {
            document.title = "React Fundamental - Paksi R";
        });
    });

    const navs = [
        {label: "Home", url:"#"},
        {label: "Features", url:"#"},
        {label: "Pricing", url:"#"},
        {label: "FAQs", url:"#"},
        {label: "About", url:"#"},
    ];

    return (
        <>
            <Header navs={navs} />
            <Container>
                <Banner />
                <FormProduct />
                <TableProduct />
            </Container>
            <Footer />
            <ModalProduct />
        </>

    )
}

export default CreateProduct;