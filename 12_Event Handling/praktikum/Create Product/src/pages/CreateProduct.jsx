import React, { Component } from 'react';

import Header from '../components/Header';
import Banner from '../components/Banner';
import FormProduct from '../components/FormProduct';
import TableProduct from '../components/TableProduct';
import ModalProduct from '../components/ModalProduct';
import Footer from '../components/Footer';
import Container from '../components/Container';
import RandomNumberButton from '../components/RandomNumberButton';

class CreateProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        document.title = "Create Product";
    }

    componentWillUnmount() {
        document.title = "React Fundamental - Paksi R";
    }

    render() {
        const navs = [
            { label: "Home", url: "#" },
            { label: "Features", url: "#" },
            { label: "Pricing", url: "#" },
            { label: "FAQs", url: "#" },
            { label: "About", url: "#" },
        ];

        return (
            <>
                <Header navs={navs} />
                <Container>
                    <Banner />
                    <FormProduct />
                    <RandomNumberButton />
                    <TableProduct />
                </Container>
                <Footer />

            </>
        );
    }
}

export default CreateProduct;
