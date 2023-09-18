import React, { useEffect, useState } from 'react';

import Banner from '../components/Banner';
import FormAccount from '../components/CreateAccount/FormAccount';
import ButtonLanguage from '../components/ButtonLanguage';
import Swal from 'sweetalert2';

const CreateAccount = () => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    document.title = "Create Account";

    Swal.fire({
        title: 'Welcome',
        text: 'Selamat datang pada page create account!',
        icon: 'success',
        timer: 3000,
    });
    return () => {
      document.title = "React Fundamental - Paksi R";
    };
  }, []);

  const articles = {
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
      <main className="container">
        <ButtonLanguage language={language} setLanguage={setLanguage} />
        <Banner article={articles} language={language} />
        <FormAccount />
      </main>
    </>
  );
};

export default CreateAccount;
