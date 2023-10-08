import React, { useEffect, useState } from 'react';

import Banner from '../components/Banner';
import FormAccount from '../components/CreateAccount/FormAccount';
import ButtonLanguage from '../components/ButtonLanguage';
import Swal from 'sweetalert2';
import TableAccount from '../components/CreateAccount/TableAccount';
import { useSelector } from 'react-redux';

const CreateAccount = () => {
  const [accounts, setAccounts] = useState(() => {
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
    const updatedAccounts = [...accounts, newAccount];
    setAccounts(updatedAccounts);
  };

  const removeAccount = (uuid) => {
    const updatedAccounts = accounts.filter((data) => data.uuid !== uuid);
    setAccounts(updatedAccounts);
  };

  const updateAccount = (updatedAccount) => {
    const updatedAccounts = accounts.map((acc) =>
      acc.uuid === updatedAccount.uuid ? updatedAccount : acc
    );
    setAccounts(updatedAccounts);
  };

  return (
    <>
      <main className="container">
        <ButtonLanguage />
        <Banner />
        <FormAccount account={account} updateAccount={updateAccount} addAccount={addAccount} />
        <TableAccount accounts={accounts} selectAccount={selectAccount} removeAccount={removeAccount} />
      </main>
    </>
  );
};

export default CreateAccount;
