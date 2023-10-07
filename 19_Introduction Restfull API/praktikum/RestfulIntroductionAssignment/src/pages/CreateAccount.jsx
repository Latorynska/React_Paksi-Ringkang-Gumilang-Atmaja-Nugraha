import React, { useEffect, useState } from 'react';

import Banner from '../components/Banner';
import FormAccount from '../components/CreateAccount/FormAccount';
import ButtonLanguage from '../components/ButtonLanguage';
import Swal from 'sweetalert2';
import TableAccount from '../components/CreateAccount/TableAccount';
import { useSelector } from 'react-redux';

const CreateAccount = () => {
  const language = useSelector((state) => state.language);
  const [accounts, setAccounts] = useState(() => {
    // Initialize state from localStorage or with an empty array
    const storedAccounts = JSON.parse(localStorage.getItem('accounts'));
    return storedAccounts || [];
  });
  const [account, setAccount] = useState({
    uuid: '',
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    gender: '',
    address: '',
    address2: '',
    nationality: '',
    languageSpoken: [],
  });

  // Load accounts data from localStorage on component mount
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

  // Save accounts data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('accounts', JSON.stringify(accounts));
  }, [accounts]);

  const selectAccount = (uuid) => {
    const selectedAccount = accounts.find((data) => data.uuid === uuid);
    if (selectedAccount) {
      setAccount(selectedAccount);
    }
  };

  const addAccount = (newAccount) => {
    // Update the accounts state and save to localStorage
    const updatedAccounts = [...accounts, newAccount];
    setAccounts(updatedAccounts);
  };

  const removeAccount = (uuid) => {
    // Update the accounts state and save to localStorage
    const updatedAccounts = accounts.filter((data) => data.uuid !== uuid);
    setAccounts(updatedAccounts);
  };

  const updateAccount = (updatedAccount) => {
    // Update the accounts state and save to localStorage
    const updatedAccounts = accounts.map((acc) =>
      acc.uuid === updatedAccount.uuid ? updatedAccount : acc
    );
    setAccounts(updatedAccounts);
  };

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
        <ButtonLanguage />
        <Banner article={articles} language={language} />
        <FormAccount account={account} updateAccount={updateAccount} addAccount={addAccount} />
        <TableAccount accounts={accounts} selectAccount={selectAccount} removeAccount={removeAccount} />
      </main>
    </>
  );
};

export default CreateAccount;
