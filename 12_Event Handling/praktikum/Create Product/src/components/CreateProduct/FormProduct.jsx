import { useEffect, useState } from "react"; 

const FormProduct = (props) => {

    const [isProductNameError, setIsProductNameError] = useState('');
    const [isCategoryError, setIsCategoryError] = useState('');
    const [isImageError, setIsImageError] = useState('');
    const [isDescriptionError, setIsDescriptionError] = useState('');
    const [isPriceError, setIsPriceError] = useState('');
    
    const checkProductNameInput = (e) =>{
        if(e.target.value.length > 10){
            setIsProductNameError('product name tidak boleh lebih dari 10 karakter!');
        }
        else if (e.target.value.length > 25) {
            alert('product name must not exceed 25 characters!');
            setIsProductNameError('product name must not exceed 25 characters!');
        } else {
            setIsProductNameError('');
        }
    }

    const checkFieldValidity = () => {
        const inputProductName = document.querySelector('input[name=productName]');
        const inputProductCategory = document.querySelector('select[name=productCategory]');
        const inputProductImage = document.querySelector('input[name=productImage]');
        const inputProductDescription = document.querySelector('textarea[name=description]');
        const inputProductPrice = document.querySelector('input[name=price]');

        if (inputProductName.value.trim() === '') {
            setIsProductNameError('Product Name input must not be empty!');
        } else {
            setIsProductNameError('');
        }

        if (inputProductCategory.value === '') {
            setIsCategoryError('Please select a Product Category!');
        } else {
            setIsCategoryError('');
        }

        if(inputProductImage.files.length === 0){
            setIsImageError('Product Image must not be empty!');
        } else {
            setIsImageError('');
        }

        if (inputProductDescription.value.trim() === '') {
            setIsDescriptionError('Product Description must not be empty!');
        } else {
            setIsDescriptionError('');
        }

        if (inputProductPrice.value.trim() === '') {
            setIsPriceError('Please enter a valid product price!');
        } else {
            setIsPriceError('');
        }
    }
    //function untuk mencegah input non-numeric
    const handleInputNumeric = (event) => {
        let inputValue = event.target.value;
        inputValue = inputValue.replace(/[^0-9]/g, '');
        event.target.value = inputValue;
      }
    
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
                                    className={`form-control ${isProductNameError && 'is-invalid'}`}
                                    id="productName"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="right"
                                    data-bs-title="Input Nama Produk"
                                    onChange={(e) => {
                                        checkProductNameInput; 
                                        checkFieldValidity
                                    }}
                                />
                                <div className='invalid-feedback d-block'>
                                    {isProductNameError ? isProductNameError : ''}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5 mb-3">
                                <label htmlFor="productCategory" className="form-label fs-5">
                                    Product Category
                                </label>
                                <select
                                    className={`form-select ${isCategoryError ? 'is-invalid' : ''}`}
                                    aria-label="Default select example"
                                    name="productCategory"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="right"
                                    data-bs-title="Kategori Produk"
                                    onChange={checkFieldValidity}
                                >
                                    <option value="Electronic">Electronic</option>
                                    <option value="Daily Needs">Daily Needs</option>
                                    <option value="Miscellaneous">Miscellaneous</option>
                                </select>
                                <div className='invalid-feedback d-block'>
                                    {isCategoryError ? isCategoryError : ''}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 mb-3">
                                <label htmlFor="productImage" className="form-label">
                                    Image of Product
                                </label>
                                <input
                                    className={`form-control border-primary text-primary  ${isImageError ? 'is-invalid' : ''}`}
                                    name="productImage"
                                    type="file"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="right"
                                    data-bs-title="Foto Produk"
                                    id="productImage"
                                    onChange={checkFieldValidity}
                                />
                                <div className='invalid-feedback d-block' data-input="productImage">
                                    {isImageError ? isImageError : ''}
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
                                    <div className="invalid-feedback d-block" data-radio="freshness">
                                        
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
                                    className={`form-control ${isDescriptionError && 'is-invalid'}`}
                                    name="description"
                                    id=""
                                    cols={30}
                                    rows={5}
                                    required=""
                                    defaultValue={""}
                                    onChange={checkFieldValidity}
                                />
                                <div className="invalid-feedback d-block">
                                    {isDescriptionError ? isDescriptionError : ''}
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
                                    className={`form-control ${isPriceError && 'is-invalid'}`}
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    name="price"
                                    id="price"
                                    placeholder="$ 1"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="right"
                                    data-bs-title="Harga Produk"
                                    required=""
                                    onChange={checkFieldValidity}
                                    onInput={handleInputNumeric}
                                />
                                <div className="invalid-feedback d-block">
                                    {isPriceError ? isPriceError : ''}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="mt-5 d-grid col-md-11 mx-auto">
                                <button
                                    className="btn btn-lg btn-primary"
                                    type="button"
                                    onClick={checkFieldValidity}
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