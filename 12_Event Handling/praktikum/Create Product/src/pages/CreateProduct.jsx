import React, { Component } from 'react';

import Header from '../components/Header';
import Banner from '../components/Banner';
import FormProduct from '../components/CreateProduct/FormProduct';
import TableProduct from '../components/CreateProduct/TableProduct';
import Footer from '../components/Footer';
import Container from '../components/Container';
import RandomNumberButton from '../components/CreateProduct/RandomNumberButton';
import ButtonLanguage from '../components/ButtonLanguage';

class CreateProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: 'en'
        };
    }

    componentDidMount() {
        document.title = "Create Product";
    }

    componentWillUnmount() {
        document.title = "React Fundamental - Paksi R";
    }

    setLanguage = (newLanguage) => {
        this.setState({language:newLanguage});
    }
    render() {
        const navs = [
            { label: "Home", url: "#" },
            { label: "Features", url: "#" },
            { label: "Pricing", url: "#" },
            { label: "FAQs", url: "#" },
            { label: "About", url: "#" },
        ];
        const article = {

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
                <Header navs={navs} />
                <Container>
                    <ButtonLanguage language={this.state.language} setLanguage={this.setLanguage}/>
                    <Banner article={article} language={this.state.language} />
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
