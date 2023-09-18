const FormAccount = () => {
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
                    >
                    <div className="row">
                        <div className="col-md-6 mb-3">
                        <label htmlFor="firstName" className="form-label fs-5">
                            First Name
                        </label>
                        <input
                            name="firstName"
                            type="text"
                            className="form-control"
                            id="firstName"
                            data-bs-toggle="tooltip"
                            data-bs-placement="right"
                            data-bs-title="Input Nama Produk"
                            maxLength={25}
                            required=""
                        />
                        <div className="invalid-feedback">
                            Please insert Your First Name
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
                            className="form-control"
                            id="lastName"
                            data-bs-toggle="tooltip"
                            data-bs-placement="right"
                            data-bs-title="Input Nama Produk"
                            maxLength={25}
                            required=""
                        />
                        <div className="invalid-feedback">
                            Please isnert your last name
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                        <label htmlFor="username" className="form-label fs-5">
                            Username{" "}
                        </label>
                        <input
                            name="username"
                            type="text"
                            className="form-control"
                            id="username"
                            data-bs-toggle="tooltip"
                            data-bs-placement="right"
                            data-bs-title="Input Nama Produk"
                            maxLength={25}
                            required=""
                        />
                        <div className="invalid-feedback">
                            please insert your username
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
                            className="form-control"
                            id="email"
                            data-bs-toggle="tooltip"
                            data-bs-placement="right"
                            data-bs-title="Input Nama Produk"
                            maxLength={25}
                            required=""
                        />
                        <div className="invalid-feedback">
                            please insert your email
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
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="male"
                            defaultValue="male"
                            required=""
                            />
                            <label className="form-check-label" htmlFor="male">
                            Male
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="female"
                            defaultValue="female"
                            required=""
                            />
                            <label className="form-check-label" htmlFor="female">
                            Female
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="other"
                            defaultValue="other"
                            required=""
                            />
                            <label className="form-check-label" htmlFor="other">
                            Other
                            </label>
                            <div className="invalid-feedback" data-radio="gender">
                            Pilih Gender Anda
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mb-3">
                        <label htmlFor="address1" className="form-label">
                            Address
                        </label>
                        <textarea
                            className="form-control"
                            name="address1"
                            id=""
                            cols={30}
                            rows={5}
                            required=""
                            defaultValue={""}
                        />
                        <div className="invalid-feedback">isi alamat anda</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mb-3">
                        <label htmlFor="address2" className="form-label">
                            Address 2
                        </label>
                        <textarea
                            className="form-control"
                            name="address2"
                            id=""
                            cols={30}
                            rows={5}
                            required=""
                            defaultValue={""}
                        />
                        <div className="invalid-feedback">isi alamat anda</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5 mb-3">
                        <label htmlFor="productCategory" className="form-label fs-5">
                            Nationality
                        </label>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            name="nationality"
                            data-bs-toggle="tooltip"
                            data-bs-placement="right"
                            data-bs-title="Kategori Produk"
                            required=""
                        >
                            <option value="indonesia">Indonesia</option>
                            <option value="other">other</option>
                        </select>
                        <div className="invalid-feedback">Pilih Kategori Produk</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mb-3">
                        <label htmlFor="languageSpoken[]" className="form-label">
                            Language Spoken :
                        </label>
                        <div className="form-check">
                            <input
                            className="form-check-input"
                            type="checkbox"
                            id="bahasaIndonesia"
                            name="languageSpoken[]"
                            defaultValue="bahasa indonesia"
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
                            className="form-check-input"
                            type="checkbox"
                            id="english"
                            name="languageSpoken[]"
                            defaultValue="English"
                            />
                            <label className="form-check-label" htmlFor="english">
                            English
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                            className="form-check-input"
                            type="checkbox"
                            id="otherLanguage"
                            name="languageSpoken[]"
                            defaultValue="OtherLanguage"
                            />
                            <label className="form-check-label" htmlFor="otherLanguage">
                            Other
                            </label>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mt-5 d-grid col-md-11 mx-auto">
                        <button
                            className="btn btn-lg btn-primary"
                            type="submit"
                            disabled=""
                        >
                            Submit
                        </button>
                        </div>
                    </div>
                    </form>
                </div>
            </section>
        </>
     );
}
 
export default FormAccount;