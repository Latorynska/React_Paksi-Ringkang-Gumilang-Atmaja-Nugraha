import React, { useEffect } from 'react';

import Banner from '../components/Banner';
import FormAccount from '../components/CreateAccount/FormAccount';
import Swal from 'sweetalert2';

const CreateAccount = () => {
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
      <main className="container">
        <Banner article={article} language="en" />
        <FormAccount />
      </main>
    </>
  );
};

export default CreateAccount;
