import { createContext } from "react";
import { useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }){
    const [isLoggedIn, setIsLoggedIn] = useState(
        sessionStorage.getItem('isLoggedIn') === 'true' ? true : false
    );

    useEffect(() => {
        sessionStorage.setItem('isLoggedIn', isLoggedIn);
    }, [isLoggedIn]);
    
    const login = () => {
        setIsLoggedIn(true);
    }
    const logout = () => {
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider value={ { isLoggedIn, login, logout } }>
            { children }
        </AuthContext.Provider>
    )
}
