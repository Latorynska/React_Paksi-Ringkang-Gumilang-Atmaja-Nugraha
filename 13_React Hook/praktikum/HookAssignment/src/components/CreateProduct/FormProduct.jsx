import { useEffect, useState } from "react"; 
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';


const FormProduct = ({ addProduct, updateProduct, product }) => {

    const [productData, setProductData] = useState(product);
    const [formError, setFormError] = useState({
        productName: '',
        productCategory: '',
        productImageUrl: '',
        productDescription: '',
        productPrice: '',
    });
    const [buttonDisabled, setButtonDisabled] = useState(false);


    // Update productData when the product prop changes
    useEffect(() => {
        setProductData(product);
    }, [product]);

    useEffect(() => {
        // Check if any of the fields is empty
        const isEmpty = Object.values(productData).some(value => value === '');
    
        // Function to update formError based on current state
        const updateFormError = () => {
            setFormError(prevErrors => ({
                ...prevErrors,
                productName: productData.name === '' ? 'Name is required' : '',
                productCategory: productData.category === '' ? 'Category is required' : '',
                productImageUrl: productData.image === '' ? 'Image URL is required' : '',
                productDescription: productData.description === '' ? 'Description is required' : '',
                productPrice: productData.price === '' ? 'Price is required' : '',
            }));
        };
    
        // Call the function to update formError
        updateFormError();
    
        if (isEmpty) {
            // Rest of your validation logic
        } else {
            setFormError({
                productName: '',
                productCategory: '',
                productImageUrl: '',
                productDescription: '',
                productPrice: '',
            });
        }
    
        if (productData.name.length > 25) {
            setFormError(prevErrors => ({
                ...prevErrors,
                productName: 'product name must not exceed 25 characters!',
            }));
            Swal.fire({
                title: 'Error!',
                text: 'product name must not exceed 25 characters!',
                icon: 'error',
                timer: 3000,
            });
        } else if (productData.name.length > 10) {
            setFormError(prevErrors => ({
                ...prevErrors,
                productName: 'product name tidak boleh lebih dari 10 karakter!',
            }));
        }
    }, [productData]);

    useEffect(() => {
        if(isFormValid()){
            setButtonDisabled(false);
        }
        else{
            setButtonDisabled(true);
        }
    }, [formError]);
    
    const clearDataProduct = () => {
            setProductData({
                uuid: '',
                name: '',
                category: '',
                image: '',
                description: '',
                price: '',
            });
    }
    // handle change input
    const handleInputChange = (e, field) => {
        const inputValue = e.target.type === 'file' ? e.target.files[0] : e.target.value;
    
        setProductData((prevData) => ({
            ...prevData,
            [field]: inputValue,
        }));
    };
    //function untuk mencegah input non-numeric
    const handleInputNumeric = (event) => {
        let inputValue = event.target.value;
        inputValue = inputValue.replace(/[^0-9]/g, '');
        event.target.value = inputValue;
    }

    //check form validity by checking the error status
    const isFormValid = () => {
        const errorValues = Object.values(formError);
        return errorValues.every((error) => error === '');
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
    
        if (isFormValid()) {

            if (productData.uuid) {
                updateProduct(productData);
            } else {
                const uuid = uuidv4();
        
                const newProduct = {
                    uuid: uuid, 
                    name: productData.name,
                    category: productData.category,
                    image: productData.image,
                    freshness: productData.freshness,
                    description: productData.description,
                    price: productData.price,
                };
        
                addProduct(newProduct);
            }
    
            // Reset the form data
            clearDataProduct();
    
            Swal.fire({
                title: 'Data Submitted!',
                text: 'Data telah berhasil ditambahkan kedalam state, anda bisa cek di bagian tabel product!',
                icon: 'success',
                timer: 3000,
            });
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Form still contains errors!',
                icon: 'error',
                timer: 3000,
            });
        }
    };
    

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
                        onSubmit={handleFormSubmit}
                    >
                        <input type="hidden" name="uuid" value={productData.uuid} />
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="productName" className="form-label fs-5">
                                Product Name
                                </label>
                                <input
                                    name="productName"
                                    type="text"
                                    className={`form-control ${formError.productName && 'is-invalid'}`}
                                    id="productName"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="right"
                                    data-bs-title="Input Nama Produk"
                                    value={productData.name}
                                    onInput={(e) => handleInputChange(e, 'name')}
                                />
                                <div className='invalid-feedback d-block'>
                                    {formError.productName ? formError.productName : ''}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5 mb-3">
                                <label htmlFor="productCategory" className="form-label fs-5">
                                    Product Category
                                </label>
                                <select
                                    className={`form-select ${formError.productCategory ? 'is-invalid' : ''}`}
                                    aria-label="Default select example"
                                    name="productCategory"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="right"
                                    data-bs-title="Kategori Produk"
                                    value={productData.category}
                                    onInput={(e) => handleInputChange(e, 'category')}
                                >
                                    <option value="" disabled>Select a Category</option>
                                    <option value="Electronic">Electronic</option>
                                    <option value="Daily Needs">Daily Needs</option>
                                    <option value="Miscellaneous">Miscellaneous</option>
                                </select>
                                <div className='invalid-feedback d-block'>
                                    {formError.productCategory ? formError.productCategory : ''}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 mb-3">
                                <label htmlFor="productImage" className="form-label">
                                    Image of Product
                                </label>
                                <input
                                    className={`form-control border-primary text-primary  ${formError.productImageUrl ? 'is-invalid' : ''}`}
                                    name="productImage"
                                    type="file"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="right"
                                    data-bs-title="Foto Produk"
                                    id="productImage"
                                    onChange={(e) => handleInputChange(e, 'image')}
                                />
                                <div className='invalid-feedback d-block' data-input="productImage">
                                    {formError.productImageUrl ? formError.productImageUrl : ''}
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
                                        value="brand_new"
                                        checked={productData.freshness === 'brand_new'}
                                        onChange={(e) => handleInputChange(e, 'freshness')}
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
                                        value="second_hand"
                                        checked={productData.freshness === 'second_hand'}
                                        onChange={(e) => handleInputChange(e, 'freshness')}
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
                                        value="refurbished"
                                        checked={productData.freshness === 'refurbished'}
                                        onChange={(e) => handleInputChange(e, 'freshness')}
                                    />
                                </div>
                                <div className="invalid-feedback d-block" data-radio="freshness">
                                    {formError.productFreshness ? formError.productFreshness : ''}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">
                                    Additional Description
                                </label>
                                <textarea
                                    className={`form-control ${formError.productDescription && 'is-invalid'}`}
                                    name="description"
                                    id=""
                                    cols={30}
                                    rows={5}
                                    required=""
                                    value={productData.description}
                                    onInput={(e) => handleInputChange(e, 'description')}
                                />
                                <div className="invalid-feedback d-block">
                                    {formError.productDescription ? formError.productDescription : ''}
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
                                    className={`form-control ${formError.productPrice && 'is-invalid'}`}
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    name="price"
                                    id="price"
                                    placeholder="$ 1"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="right"
                                    data-bs-title="Harga Produk"
                                    required=""
                                    value={productData.price}
                                    onInput={(e) => {
                                        handleInputNumeric(e);
                                        handleInputChange(e, 'price');
                                    }}
                                    
                                />
                                <div className="invalid-feedback d-block">
                                    {formError.productPrice ? formError.productPrice : ''}
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
                                        productData.uuid ? "Update Data" : "Submit New Data"
                                    }
                                </button>
                                {
                                    productData.uuid && <button type="button" className="btn btn-warning" disabled={buttonDisabled} onClick={clearDataProduct}>Clear Form</button>
                                }
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
     );
}
 
export default FormProduct;