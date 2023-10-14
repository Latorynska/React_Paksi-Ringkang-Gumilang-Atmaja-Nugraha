import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from 'uuid';

const FormAccount = ({ addAccount, updateAccount, account }) => {
    const [accountData, setAccountData] = useState(account);
    const [formError, setFormError] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        gender: "",
        address: "",
        address2: "",
        nationality: "",
        languageSpoken: [],
    });
    const [buttonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
        setAccountData(account);
    }, [account]);

    useEffect(() => {
        const isEmpty = Object.values(accountData).some((value) => value === "");
      
        const updatedFormError = {
          firstName: accountData.firstName === "" ? "First Name is required" : "",
          lastName: accountData.lastName === "" ? "Last Name is required" : "",
          username: accountData.username === "" ? "Username is required" : "",
          gender: accountData.gender === "" ? "Gender is required" : "",
          address: accountData.address === "" ? "Address is required" : "",
          nationality: accountData.nationality === "" ? "Choose your Nationality" : "",
          languageSpoken:
            accountData.languageSpoken.length === 0
              ? "Choose at least one language"
              : "",
        };
      
        // Email format validation using regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (accountData.email === "") {
          updatedFormError.email = "Email is required";
        } else if (!emailRegex.test(accountData.email)) {
          updatedFormError.email = "Email is not in a valid format";
        } else {
          updatedFormError.email = ""; 
        }
      
        setFormError(updatedFormError);
      
        if (isEmpty) {
            
        } else {
          setFormError({
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            gender: "",
            address: "",
            address2: "",
            nationality: "",
            languageSpoken: [],
          });
        }
      }, [accountData]);
      


    useEffect(() => {
        setButtonDisabled(!isFormValid());
    }, [formError]);

    const handleInputChange = (e) => {
        const { value, name, type, checked } = e.target;

        if (type !== "checkbox") {
            setAccountData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        } else if (name === "languageSpoken[]") {
            setAccountData((prevData) => {
                const updatedLanguages = checked
                    ? [...prevData.languageSpoken, value]
                    : prevData.languageSpoken.filter((language) => language !== value);
                return {
                    ...prevData,
                    languageSpoken: updatedLanguages,
                };
            });
        }
    };

    const isFormValid = () => {
        const errorValues = Object.values(formError);
        return errorValues.every((error) => error === "");
    };
    const clearAccountData = () => {
        setAccountData({
            uuid: "",
            firstName: "",
            lastName: "",
            username: "",
            gender: "",
            address: "",
            nationality: "",
            languageSpoken: "",
            email: "",
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (isFormValid()) {
            if(accountData.uuid){
                updateAccount(accountData)
            } else {
                const uuid = uuidv4();
                const newAccount = {
                    ...accountData,
                    uuid: uuid, 
                }
                addAccount(newAccount);
                clearAccountData();
            }
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Form still contains errors!',
                icon: 'error',
                timer: 3000,
            });
        }
    }

    return (
        <>
        <section className="row m-lg-5 justify-content-center">
            <div className="col-md-9">
                <h2>Detail Form</h2>
                <form
                    action="#"
                    method=""
                    className="mt-5 needs-validation"
                    id="form-product"
                    noValidate=""
                    onSubmit={(e) => handleFormSubmit(e)}
                >
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="firstName" className="form-label fs-5">
                            First Name
                            </label>
                            <input
                                name="firstName"
                                type="text"
                                className={`form-control ${
                                    formError.firstName && "is-invalid"
                                }`}
                                id="firstName"
                                data-bs-toggle="tooltip"
                                data-bs-placement="right"
                                data-bs-title="Input Nama Produk"
                                maxLength={25}
                                required=""
                                value={accountData.firstName}
                                onChange={handleInputChange}
                            />
                            <div className="invalid-feedback">
                                {formError.firstName ? formError.firstName : ""}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="lastName" className="form-label fs-5">
                            Last Name
                            </label>
                            <input
                            name="lastName"
                            type="text"
                            className={`form-control ${
                                formError.lastName && "is-invalid"
                            }`}
                            id="lastName"
                            data-bs-toggle="tooltip"
                            data-bs-placement="right"
                            data-bs-title="Input Nama Produk"
                            maxLength={25}
                            required=""
                            value={accountData.lastName}
                            onChange={handleInputChange}
                            />
                            <div className="invalid-feedback">
                            {formError.lastName ? formError.lastName : ""}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="username" className="form-label fs-5">
                                Username
                            </label>
                            <input
                                name="username"
                                type="text"
                                className={`form-control ${
                                    formError.username && "is-invalid"
                                }`}
                                id="username"
                                data-bs-toggle="tooltip"
                                data-bs-placement="right"
                                data-bs-title="Input Nama Produk"
                                maxLength={25}
                                required=""
                                value={accountData.username}
                                onChange={handleInputChange}
                            />
                            <div className="invalid-feedback">
                                {formError.username ? formError.username : ""}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="email" className="form-label fs-5">
                            Email
                            </label>
                            <input
                            name="email"
                            type="email"
                            className={`form-control ${
                                formError.email && "is-invalid"
                            }`}
                            id="email"
                            data-bs-toggle="tooltip"
                            data-bs-placement="right"
                            data-bs-title="Input Nama Produk"
                            maxLength={25}
                            required=""
                            value={accountData.email}
                            onChange={handleInputChange}
                            />
                            <div className="invalid-feedback">
                            {formError.email ? formError.email : ""}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mb-3">
                            <label htmlFor="gender" className="form-label">
                                Gender
                            </label>
                            <div className="form-check">
                                <input
                                    className={`form-check-input ${
                                    formError.gender && "is-invalid"
                                    }`}
                                    type="radio"
                                    name="gender"
                                    id="male"
                                    value="male"
                                    required=""
                                    checked={accountData.gender === "male"}
                                    onChange={handleInputChange}
                                />
                                <label className="form-check-label" htmlFor="male">
                                    Male
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className={`form-check-input ${
                                    formError.gender && "is-invalid"
                                    }`}
                                    type="radio"
                                    name="gender"
                                    id="female"
                                    value="female"
                                    required=""
                                    checked={accountData.gender === "female"}
                                    onChange={handleInputChange}
                                />
                                <label className="form-check-label" htmlFor="female">
                                    Female
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className={`form-check-input ${
                                    formError.gender && "is-invalid"
                                    }`}
                                    type="radio"
                                    name="gender"
                                    id="other"
                                    value="other"
                                    required=""
                                    checked={accountData.gender === "other"}
                                    onChange={handleInputChange}
                                />
                                <label className="form-check-label" htmlFor="other">
                                    Other
                                </label>
                            </div>
                            <div className="invalid-feedback d-block" data-radio="gender">
                                {formError.gender ? formError.gender : ""}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">
                            Address
                            </label>
                            <textarea
                            className={`form-control ${
                                formError.address && "is-invalid"
                            }`}
                            name="address"
                            id=""
                            cols={30}
                            rows={5}
                            required=""
                            value={accountData.address}
                            onChange={handleInputChange}
                            />
                            <div className="invalid-feedback">
                            {formError.address ? formError.address : ""}
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="mb-3">
                            <label htmlFor="address2" className="form-label">
                            Address 2
                            </label>
                            <textarea
                            className={`form-control ${
                                formError.address2 && "is-invalid"
                            }`}
                            name="address2"
                            id=""
                            cols={30}
                            rows={5}
                            required=""
                            value={accountData.address2}
                            onChange={handleInputChange}
                            />
                            <div className="invalid-feedback">
                            {formError.address2 ? formError.address2 : ""}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5 mb-3">
                            <label htmlFor="productCategory" className="form-label fs-5">
                            Nationality
                            </label>
                            <select
                                className={`form-select ${
                                    formError.nationality && "is-invalid"
                                }`}
                                aria-label="Default select example"
                                name="nationality"
                                data-bs-toggle="tooltip"
                                data-bs-placement="right"
                                data-bs-title="Kategori Produk"
                                required=""
                                value={accountData.nationality}
                                onChange={handleInputChange}
                            >
                                <option value="">Select Nationality</option>
                                <option value="indonesia">Indonesia</option>
                                <option value="other">Other</option>
                            </select>
                            <div className="invalid-feedback">
                                {formError.nationality ? formError.nationality : ""}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mb-3">
                            <label htmlFor="languageSpoken[]" className="form-label">
                                Language Spoken :
                            </label>
                            <div className="form-check">
                                <input
                                    className={`form-check-input ${
                                    formError.languageSpoken && "is-invalid"
                                    }`}
                                    type="checkbox"
                                    id="bahasaIndonesia"
                                    name="languageSpoken[]"
                                    value="bahasa indonesia"
                                    checked={accountData.languageSpoken.includes(
                                    "bahasa indonesia"
                                    )}
                                    onChange={handleInputChange}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="bahasaIndonesia"
                                >
                                    Bahasa Indonesia
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className={`form-check-input ${
                                    formError.languageSpoken && "is-invalid"
                                    }`}
                                    type="checkbox"
                                    id="english"
                                    name="languageSpoken[]"
                                    value="English"
                                    checked={accountData.languageSpoken.includes("English")}
                                    onChange={handleInputChange}
                                />
                                <label className="form-check-label" htmlFor="english">
                                    English
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className={`form-check-input ${
                                    formError.languageSpoken && "is-invalid"
                                    }`}
                                    type="checkbox"
                                    id="otherLanguage"
                                    name="languageSpoken[]"
                                    value="OtherLanguage"
                                    checked={accountData.languageSpoken.includes(
                                    "OtherLanguage"
                                    )}
                                    onChange={handleInputChange}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="otherLanguage"
                                >
                                    Other
                                </label>
                            </div>
                            <div className="invalid-feedback d-block">
                                {formError.languageSpoken ? formError.languageSpoken : ""}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mt-5 d-grid col-md-11 mx-auto">
                            <button
                                className="btn btn-lg btn-primary"
                                type="submit"
                                disabled={buttonDisabled}
                            >
                                {
                                    accountData.uuid ? "Update Data" : "Submit New Data"
                                }
                            </button>
                            {
                                accountData.uuid && <button type="button" className="btn btn-warning" disabled={buttonDisabled} onClick={clearAccountData}>Clear Form</button>
                            }
                        </div>
                    </div>
                </form>
            </div>
        </section>
        </>
    );
};

export default FormAccount;
