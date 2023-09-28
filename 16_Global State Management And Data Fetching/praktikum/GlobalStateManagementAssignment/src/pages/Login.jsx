import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Check email validity in real-time
    if (name === 'email') {
      setEmailValid(validateEmail(value));
    }

    // Check password validity in real-time
    if (name === 'password') {
      setPasswordValid(value.length >= 8);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    // Perform email validation
    if (!emailValid) {
      alert('Invalid email address');
      return;
    }

    // Perform password validation
    if (!passwordValid) {
      alert('Password must be at least 8 characters long');
      return;
    }

    // Perform login
    if (email === 'admin@gmail.com' && password === 'admin123') {
      login();
      navigate('/');
    } else {
      alert('Login failed');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Login</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input
                    type="email"
                    className={`form-control ${emailValid ? '' : 'is-invalid'}`}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  {!emailValid && <div className="invalid-feedback">Invalid email address</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password:</label>
                  <input
                    type="password"
                    className={`form-control ${passwordValid ? '' : 'is-invalid'}`}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                  {!passwordValid && <div className="invalid-feedback">Password must be at least 8 characters long</div>}
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
              <div className="mt-3">
                Don't have an account? <Link to="/register">Register here</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
