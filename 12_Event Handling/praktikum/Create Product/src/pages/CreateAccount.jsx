import React, { Component } from 'react';

import Header from '../components/Header';
import Banner from '../components/Banner';
import Container from '../components/Container';
import Footer from '../components/Footer';
import FormAccount from '../components/CreateAccount/FormAccount';

class CreateAccount extends Component {
    constructor(props) {
        super(props);
            this.state = {

        };
    }

    componentDidMount() {
        document.title = "Create Account";
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
        const article = {

            title: {
          
              id: "Buat Akun",
          
              en: "Create Account"
          
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
                    <Banner article={article} />
                    <FormAccount />
                </Container>
                <Footer />

            </>
        );
    }
}

export default CreateAccount;
