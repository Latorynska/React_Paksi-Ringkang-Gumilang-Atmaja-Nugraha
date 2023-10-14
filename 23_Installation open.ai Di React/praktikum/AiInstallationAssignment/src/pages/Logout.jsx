import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate('/login');
  }, [logout, navigate]);

  return (
    <div>
      <p>Logging out...</p>
    </div>
  );
}

export default Logout;
