import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const TableAccount = ({ accounts, selectAccount, removeAccount }) => {

  const handleUpdate = (uuid) => {
    selectAccount(uuid);
  };
  const handleDelete = (uuid) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this Account!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        removeAccount(uuid);
        Swal.fire('Deleted!', 'one Account has been deleted.', 'success');
      }
    });
  };
  return (
    <>
      <div className="row">
        <h1 className="text-center">List Account</h1>
      </div>
      <div className="row">
        <div className="col-12">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>UUID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Address</th>
                <th>Address 2</th>
                <th>Nationality</th>
                <th>Language</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody id="table-body">
              {accounts.map((account) => (
                <tr key={account.uuid}>
                  <td>
                    <Link to={`/account-details/${account.uuid}`}>
                      {account.uuid}
                    </Link>
                  </td>
                  <td>{account.firstName}</td>
                  <td>{account.lastName}</td>
                  <td>{account.username}</td>
                  <td>{account.email}</td>
                  <td>{account.gender}</td>
                  <td>{account.address}</td>
                  <td>{account.address2}</td>
                  <td>{account.nationality}</td>
                  <td>
                    {
                      account.languageSpoken.map((lang, index) => (
                        index === account.languageSpoken.length - 1 ? lang : `${lang}, `
                      ))
                    }
                  </td>
                  <td>
                    <div className="d-flex justify-content-between">
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(account.uuid)}
                      >
                        Delete
                      </button>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => handleUpdate(account.uuid)}
                      >
                        Update
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="container row">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            id="search"
            placeholder="Search by Product Name"
          />
        </div>
      </div>
    </>
  );
};

export default TableAccount;
