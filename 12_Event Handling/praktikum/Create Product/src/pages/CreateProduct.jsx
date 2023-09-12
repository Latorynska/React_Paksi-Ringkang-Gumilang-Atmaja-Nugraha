import React, { Component } from 'react';

import Header from '../components/Header';
import Banner from '../components/Banner';
import FormProduct from '../components/CreateProduct/FormProduct';
import TableProduct from '../components/CreateProduct/TableProduct';
import Footer from '../components/Footer';
import Container from '../components/Container';
import RandomNumberButton from '../components/CreateProduct/RandomNumberButton';

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
                    <Banner pageName="Product" />
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
