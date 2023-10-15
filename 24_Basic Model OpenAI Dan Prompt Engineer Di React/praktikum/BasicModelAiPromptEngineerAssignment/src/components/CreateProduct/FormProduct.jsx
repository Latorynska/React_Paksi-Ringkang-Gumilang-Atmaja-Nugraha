import { useEffect, useState } from "react"; 
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
import Input from "../Input/Input";
import Select from "../Select/Select";
import TextArea from "../TextArea/TextArea";
import { useDispatch } from "react-redux";
import { postProduct, updateProduct } from "../../redux/thunks/productAPI";


const FormProduct = ({ product }) => {
    const dispatch = useDispatch();
    const [productData, setProductData] = useState(product);
    const [formError, setFormError] = useState({
        productName: '',
        productCategory: '',
        productImageUrl: '',
        productDescription: '',
        productPrice: '',
        productFreshness: '',
    });
    
    const [buttonDisabled, setButtonDisabled] = useState(false);
    
    const options = [
        {
            label: 'Select a Category',
            value: '',
        },
        {
            label: 'Electronic',
            value: 'Electronic',
        },
        {
            label: 'Daily Needs',
            value: 'Daily Needs',
        },
        {
            label: 'Miscellaneous',
            value: 'Miscellaneous',
        }
    ]
    const freshnessRadio = [
        {
            label: 'Brand New',
            value: 'brand_new',
        },
        {
            label: 'Refurbished',
            value: 'refurbished',
        },
        {
            label: 'Second Hand',
            value: 'second_hand',
        }
    ]

    const MAX_IMAGE_SIZE = 50 * 1024;

    // Update productData when the product prop changes
    useEffect(() => {
        setProductData(product);
    }, [product]);

    useEffect(() => {
        const updatedFormError = {
          productName: '',
          productCategory: '',
          productImageUrl: '',
          productDescription: '',
          productPrice: '',
          productFreshness: '',
        };
      
        // Check if any of the fields is empty
        const isEmpty = Object.values(productData).some((value) => {
          if (value === '') {
            return true;
          }
          return false;
        });
      
        if (isEmpty) {
          updatedFormError.productName = productData.name === '' ? 'Name is required' : '';
          updatedFormError.productCategory = productData.category === '' ? 'Category is required' : '';
          updatedFormError.productImageUrl = productData.image === '' ? 'Image URL is required' : '';
          updatedFormError.productDescription = productData.description === '' ? 'Description is required' : '';
          updatedFormError.productPrice = productData.price === '' ? 'Price is required' : '';
          updatedFormError.productFreshness = !productData.freshness ? 'Freshness is required' : ''; 
        }
      
        // Validate product name length
        if (productData.name.length > 25) {
          updatedFormError.productName = 'Product name must not exceed 25 characters!';
        } else if (productData.name.length > 10) {
          updatedFormError.productName = 'Product name cannot exceed 10 characters!';
        }
      
        // Validate product name using regex
        const productNameRegex = /^[A-Za-z0-9\s]*$/;
        if (!productNameRegex.test(productData.name)) {
          updatedFormError.productName = 'Product name can only contain letters, numbers, and spaces';
        }
      
        // Check if product name contains @, /, [, ], or {
        if (/[@/[\]{}]/.test(productData.name)) {
          updatedFormError.productName = 'Product name cannot contain @, /, [, ], or {';
        }
      
        // Validate price field for numeric characters only
        const priceRegex = /^[0-9]+$/;
        if (!priceRegex.test(productData.price)) {
          updatedFormError.productPrice = 'Price can only contain numeric characters';
        }

        // Update form error and button disabled state
        setFormError(updatedFormError);
      }, [productData]);

      useEffect(() => {
        setButtonDisabled(!isFormValid());
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
    const handleInputChange = (e) => {
        let { name, value, type, files } = e.target;
        
        if (type === 'file') {
            const selectedFile = files[0];
            
            if (selectedFile && selectedFile.type.startsWith('image/')) {
                if (selectedFile.size > MAX_IMAGE_SIZE) {
                    // Image size exceeds 50 KB, set error message
                    setFormError((prevErrors) => ({
                        ...prevErrors,
                        productImageUrl: 'Image size must be less than 50 KB',
                    }));
                } else {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        // Save the base64 data to the state
                        setProductData((prevData) => ({
                            ...prevData,
                            [name]: reader.result,
                        }));
                        setFormError(prevErrors => ({
                            ...prevErrors,
                            productImageUrl: '',
                        }));
                    };
                    reader.readAsDataURL(selectedFile);
                }
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Tolong pilih file foto!',
                    icon: 'error',
                    timer: 3000,
                });
                setProductData((prevData) => ({
                    ...prevData,
                    [name]: '',
                }));
                
            }
        } else {
            setProductData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
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
                dispatch(updateProduct(productData))
                .then(() => {
                    Swal.fire({
                        title: 'Data Berhasil Diubah!',
                        text: 'Data telah berhasil disimpan, anda bisa cek di bagian tabel product!',
                        icon: 'success',
                        timer: 3000,
                    });
                });
            } else {
                const uuid = uuidv4();
                const numericId = uuid.replace(/-/g, "");
                const newProduct = {
                    ...productData,
                    uuid: numericId,
                };
        
                dispatch(postProduct(newProduct))
                .then(() => {
                    Swal.fire({
                        title: 'Data Berhasil Ditambahkan!',
                        text: 'Data telah berhasil disimpan, anda bisa cek di bagian tabel product!',
                        icon: 'success',
                        timer: 3000,
                    });
                });
            }
    
            // Reset the form data
            clearDataProduct();
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
                                <label htmlFor="name" className="form-label fs-5">
                                    Product Name
                                </label>
                                <Input 
                                    name="name"
                                    value={productData.name}
                                    onChange={(e) => handleInputChange(e)}
                                    id="name"
                                    className={`form-control ${formError.productName && 'is-invalid'}`}
                                    type="text"
                                    errorHelper={formError.productName}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5 mb-3">
                                <label htmlFor="category" className="form-label fs-5">
                                    Product Category
                                </label>
                                <Select 
                                    className={`form-select ${formError.productCategory ? 'is-invalid' : ''}`}
                                    name="category"
                                    value={productData.category}
                                    onChange={(e) => handleInputChange(e)}
                                    options={options}
                                    errorHelper={formError.productCategory}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 mb-3">
                                <label htmlFor="image" className="form-label">
                                    Image of Product
                                </label>
                                <Input 
                                    className={`form-control border-primary text-primary  ${formError.productImageUrl ? 'is-invalid' : ''}`}
                                    name="image"
                                    type="file"
                                    id="image"
                                    onChange={(e) => handleInputChange(e)}
                                    errorHelper={formError.productImageUrl}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3">
                                <label htmlFor="freshness" className="form-label">
                                    Product Freshness
                                </label>
                                {
                                    freshnessRadio.map((data, key) => (
                                        <div className="form-check" key={key}>
                                            <Input 
                                                className={`form-check-input ${formError.productFreshness && "is-invalid"}`}
                                                type="radio"
                                                name="freshness"
                                                id={data.value}
                                                value={data.value}
                                                checked={productData.freshness === data.value}
                                                onChange={(e) => handleInputChange(e)}
                                            />
                                            <label className="form-check-label" htmlFor={data.value}>
                                                {data.label}
                                            </label>
                                        </div>
                                    ))
                                }
                                <div className="invalid-feedback d-block">
                                    {formError.productFreshness}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">
                                    Additional Description
                                </label>
                                <TextArea 
                                    className={`form-control ${formError.productDescription && 'is-invalid'}`}
                                    name="description"
                                    cols={30}
                                    rows={5}
                                    value={productData.description}
                                    onChange={(e) => handleInputChange(e)}
                                    errorHelper={formError.productDescription}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">
                                    Product Price
                                </label>
                                <Input 
                                    type="text"
                                    className={`form-control ${formError.productPrice && 'is-invalid'}`}
                                    placeholder="$ 1"
                                    name="price"
                                    id="price"
                                    value={productData.price}
                                    onChange={(e) => {
                                        handleInputNumeric(e);
                                        handleInputChange(e);
                                    }}
                                    errorHelper={formError.productPrice}
                                />
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