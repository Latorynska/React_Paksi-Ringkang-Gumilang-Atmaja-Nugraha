import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const Register = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    username: '', // Add username field
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validate = (values) => {
    const errors = {};

    // Validation for First Name and Last Name (at least 3 characters)
    if (values.firstName.length < 3) {
      errors.firstName = 'First Name must be at least 3 characters';
    }

    if (values.lastName.length < 3) {
      errors.lastName = 'Last Name must be at least 3 characters';
    }

    // Username validation (no special characters)
    if (!/^[a-zA-Z0-9]*$/.test(values.username)) {
      errors.username = 'Username must not contain special characters';
    }

    // Email validation
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    // Password validation (at least 8 characters and must match confirm password)
    if (values.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  };

  const handleSubmit = (values) => {
    // Add user registration logic to your server or backend here
    console.log('Form data:', values);
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">Registration Form</h1>
          <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form>
                <div className="mb-3 row">
                  <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <Field type="text" id="firstName" name="firstName" className="form-control" />
                    <ErrorMessage name="firstName" component="div" className="text-danger" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <Field type="text" id="lastName" name="lastName" className="form-control" />
                    <ErrorMessage name="lastName" component="div" className="text-danger" />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <Field type="text" id="username" name="username" className="form-control" />
                  <ErrorMessage name="username" component="div" className="text-danger" />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <div className="input-group">
                    <span className="input-group-text" id="email">@</span>
                    <Field type="email" id="email" name="email" className="form-control" aria-describedby="email" />
                  </div>
                  <ErrorMessage name="email" component="div" className="text-danger" />
                </div>

                <div className="mb-3 row">
                  <div className="col">
                    <label htmlFor="password" className="form-label">Password</label>
                    <Field type="password" id="password" name="password" className="form-control" />
                    <ErrorMessage name="password" component="div" className="text-danger" />
                  </div>
                  <div className="col">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <Field type="password" id="confirmPassword" name="confirmPassword" className="form-control" />
                    <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary">Register</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Register;
