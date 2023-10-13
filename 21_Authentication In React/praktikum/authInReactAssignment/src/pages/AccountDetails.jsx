import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AccountDetails = () => {
  // Extract the uuid from the URL parameters
  const { uuid } = useParams();

  // Initialize account state
  const [account, setAccount] = useState(null);

  // Fetch accounts data from local storage on component mount
  useEffect(() => {
    const storedAccounts = JSON.parse(localStorage.getItem('accounts'));
    if (storedAccounts) {
      const selectedAccount = storedAccounts.find((acc) => acc.uuid === uuid);
      setAccount(selectedAccount);
    }
  }, [uuid]);

  if (!account) {
    return <div>Account not found.</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">Account Details</div>
        <div className="card-body">
          <h5 className="card-title">{`${account.firstName} ${account.lastName}`}</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>UUID:</strong> {account.uuid}</li>
            <li className="list-group-item"><strong>Username:</strong> {account.username}</li>
            <li className="list-group-item"><strong>Email:</strong> {account.email}</li>
            <li className="list-group-item"><strong>Gender:</strong> {account.gender}</li>
            <li className="list-group-item"><strong>Address:</strong> {account.address}</li>
            <li className="list-group-item"><strong>Address2:</strong> {account.address2}</li>
            <li className="list-group-item"><strong>Nationality:</strong> {account.nationality}</li>
            <li className="list-group-item"><strong>Languages Spoken:</strong> {account.languageSpoken.join(', ')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
