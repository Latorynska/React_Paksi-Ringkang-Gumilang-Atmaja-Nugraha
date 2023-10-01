import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import CreateProduct from './CreateProduct'; 
import { addProduct } from '../redux/slices/productSlice';
import { expect } from 'vitest';


// Create a mocked Redux store
const mockStore = configureMockStore();
const store = mockStore({
  products: []
});

test('1. percobaan input kedalam product name dan isi nya ditampilkan', () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <CreateProduct />
      </Provider>
    );
  
    const productNameInput = getByLabelText('Product Name');
    fireEvent.change(productNameInput, { target: { value: 'Test Product' } });
    expect(productNameInput.value).toBe('Test Product');
});
test('2. Validasi Form dari input yang kosong', () => {
    const { getByText, getByLabelText, queryByText } = render(
      <Provider store={store}>
        <CreateProduct />
      </Provider>
    );
  
    // Attempt to submit the form without filling in any fields
    const submitButton = getByText('Submit New Data');
    fireEvent.click(submitButton);

    expect(getByText('Name is required')).toBeInTheDocument();
    expect(getByText('Category is required')).toBeInTheDocument();
    expect(getByText('Image URL is required')).toBeInTheDocument();
    expect(getByText('Description is required')).toBeInTheDocument();
    expect(getByText('Price can only contain numeric characters')).toBeInTheDocument();
    expect(getByText('Freshness is required')).toBeInTheDocument();
});
test('3. cek validasi input nama, dan input lainya seperti file image', () => {
  const { getByText, getByLabelText, queryByText } = render(
    <Provider store={store}>
      <CreateProduct />
    </Provider>
  );
  const submitButton = getByText('Submit New Data');
  const productNameInput = getByLabelText('Product Name');

  // test untuk spesial karakter didalam input
  fireEvent.change(productNameInput, { target: { value: 'Invalid@Name' } });
  fireEvent.click(submitButton);
  expect(getByText('Product name cannot contain @, /, [, ], or {')).toBeInTheDocument();

  // test untuk panjang maksimal 25 karakter
  fireEvent.change(productNameInput, { target: { value: 'Kalimatiniterdirilebihdari25karakterdandibuatuntukkeperluantestingsaya' } });
  fireEvent.click(submitButton);
  expect(getByText('Product name must not exceed 25 characters!')).toBeInTheDocument();


  // simulasikan untuk memasukkan file image dengan namanya paksitampan.jpg, kemudian simulasikan melakukan input pada field lainnya
  const imageInput = getByLabelText('Image of Product');
  const file = new File(['file contents'], 'paksitampan.jpg', { type: 'image/jpeg' });
  fireEvent.change(imageInput, { target: { files: [file] } });
  
  fireEvent.change(productNameInput, { target: { value: 'kokakoala' } });
  fireEvent.change(getByLabelText('Product Category'), { target: { value: 'Electronic' } });
  fireEvent.change(getByLabelText('Additional Description'), { target: { value: 'Description' } });
  fireEvent.change(getByLabelText('Product Price'), { target: { value: '100' } });
  fireEvent.click(getByLabelText('Refurbished'));
  fireEvent.click(submitButton);

  // Check that there are no error messages
  expect(queryByText('Name is required')).toBeNull();
  expect(queryByText('Product name cannot contain @, /, [, ], or {')).toBeNull();
  expect(queryByText('Product name must not exceed 25 characters!')).toBeNull();
  expect(queryByText('Price can only contain numeric characters')).toBeNull();
  expect(queryByText('Freshness is required')).toBeNull();
});


test('4. Add a new product to the Redux store', () => {
    const { getByText, getByLabelText, getByTestId } = render(
      <Provider store={store}>
        <CreateProduct />
      </Provider>
    );
  
    // Fill in the form fields with valid data
    const productNameInput = getByLabelText('Product Name');
    fireEvent.change(productNameInput, { target: { value: 'kokakoala' } });
    fireEvent.change(getByLabelText('Product Category'), { target: { value: 'Electronic' } });
    fireEvent.change(getByLabelText('Additional Description'), { target: { value: 'Description' } });
    fireEvent.change(getByLabelText('Product Price'), { target: { value: '100' } });
    fireEvent.click(getByLabelText('Refurbished'));
    const form = getByTestId('form-product');
    fireEvent.submit(form);
  
    const actions = store.getActions();
    
    const submittedProduct = {
        uuid: expect.anything(),
        name: 'kokakoala',
        category: 'Electronic',
        image: '',
        description: 'Description',
        price: '100',
        freshness: 'refurbished',
    };
  
    expect(actions).toContainEqual(addProduct(submittedProduct));
  
  });
  