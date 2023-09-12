const FormProduct = (props) => {
    return ( 
        <>
            <section className="row m-lg-5 justify-content-center">
                <div className="col-md-9">
                    <h2>Detail Product</h2>
                    <form
                        action="#"
                        method=""
                        className="mt-5 needs-validation"
                        id="form-product"
                        noValidate=""
                    >
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="productName" className="form-label fs-5">
                                Product Name
                                </label>
                                <input
                                name="productName"
                                type="text"
                                className="form-control"
                                id="productName"
                                data-bs-toggle="tooltip"
                                data-bs-placement="right"
                                data-bs-title="Input Nama Produk"
                                maxLength={25}
                                required=""
                                />
                                <div className="invalid-feedback">
                                Please isnert a valid product name
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5 mb-3">
                                <label htmlFor="productCategory" className="form-label fs-5">
                                Product Category
                                </label>
                                <select
                                className="form-select"
                                aria-label="Default select example"
                                name="productCategory"
                                data-bs-toggle="tooltip"
                                data-bs-placement="right"
                                data-bs-title="Kategori Produk"
                                required=""
                                >
                                <option value="Electronic">Electronic</option>
                                <option value="Daily Needs">Daily Needs</option>
                                <option value="Miscellaneous">Miscellaneous</option>
                                </select>
                                <div className="invalid-feedback">Pilih Kategori Produk</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 mb-3">
                                <label htmlFor="productImage" className="form-label">
                                Image of Product
                                </label>
                                <input
                                className="form-control border-primary text-primary"
                                name="productImage"
                                type="file"
                                data-bs-toggle="tooltip"
                                data-bs-placement="right"
                                data-bs-title="Foto Produk"
                                id="productImage"
                                required=""
                                />
                                <div className="invalid-feedback" data-input="productImage">
                                Pilih foto produk
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3">
                                <label htmlFor="freshness" className="form-label">
                                Product Freshness
                                </label>
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="brand_new">
                                        Brand New
                                    </label>
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="freshness"
                                        id="brand_new"
                                        defaultValue="brand_new"
                                        required=""
                                    />
                                    </div>
                                    <div className="form-check">
                                    <label className="form-check-label" htmlFor="second_hand">
                                        Second Hand
                                    </label>
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="freshness"
                                        id="second_hand"
                                        defaultValue="second_hand"
                                        required=""
                                    />
                                    </div>
                                    <div className="form-check">
                                    <label className="form-check-label" htmlFor="refurbished">
                                        Refurbished
                                    </label>
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="freshness"
                                        id="refurbished"
                                        defaultValue="refurbished"
                                        required=""
                                    />
                                    <div className="invalid-feedback" data-radio="freshness">
                                        Pilih keadaan produk
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">
                                Additional Description
                                </label>
                                <textarea
                                className="form-control"
                                name="description"
                                id=""
                                cols={30}
                                rows={5}
                                required=""
                                defaultValue={""}
                                />
                                <div className="invalid-feedback">
                                masukkan deskripsi produk
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">
                                Product Price
                                </label>
                                <input
                                type="text"
                                className="form-control"
                                inputMode="numeric"
                                pattern="[0-9]*"
                                name="price"
                                id="price"
                                placeholder="$ 1"
                                data-bs-toggle="tooltip"
                                data-bs-placement="right"
                                data-bs-title="Harga Produk"
                                required=""
                                />
                                <div className="invalid-feedback">
                                please enter a valid product price
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="mt-5 d-grid col-md-11 mx-auto">
                                <button
                                    className="btn btn-lg btn-primary"
                                    type="button"
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
 
export default FormProduct;