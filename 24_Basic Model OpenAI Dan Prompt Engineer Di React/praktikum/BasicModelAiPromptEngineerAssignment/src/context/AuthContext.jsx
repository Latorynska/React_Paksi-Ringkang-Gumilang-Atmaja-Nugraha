import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export function AuthProvider({ children }){
    const [isLoggedIn, setIsLoggedIn] = useState(
        sessionStorage.getItem('isLoggedIn') === 'true' ? true : false
    );

    useEffect(() => {
        sessionStorage.setItem('isLoggedIn', isLoggedIn);
    }, [isLoggedIn]);
    
    const login = (email, password) => {
        const apiUrl = "https://6521213fa4199548356cd527.mockapi.io/users";
      
        // gunakan email 'admin@gmail.com' dan password admin123 agar bisa login, karena data di mockapi cuma ada itu
        return axios
          .get(apiUrl)
          .then((response) => {
            const userData = response.data.find(
              (user) => user.email === email && user.password === password
            );
      
            if (userData) {
              setIsLoggedIn(true);
              return true; 
            } else {
              console.log("Login failed. Invalid email or password.");
              return false; 
            }
          })
          .catch((error) => {
            console.error("An error occurred while logging in:", error);
            return false; 
          });
      };
      
    const logout = () => {
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider value={ { isLoggedIn, login, logout } }>
            { children }
        </AuthContext.Provider>
    )
}
