import { useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Layout = ({ children }) => {
    const { isLoggedIn } = useContext(AuthContext);

    const navs = [
      { label: "Home", url: "/" },
      { label: "Create Product", url: "/create-product" },
      { label: "Create Account", url: "/create-account" },
      { label: isLoggedIn ? "Logout" : "Login", url: isLoggedIn ? "/logout" : "/login" },
    ];
    const location = useLocation();
    const { pathname } = location;

    const getActivePage = (pathname) => {
        switch (pathname) {
          case '/create-account':
            return 'Create Account';
          case '/create-product':
            return 'Create Product';
          case '/':
            return 'Home';
          case '/login':
              return 'Login';
          default:
            return 'Unknown';
        }
    };
      
    const activePage = getActivePage(pathname);
      
    return ( 
        <>
            <Header navs={navs} activePage={activePage}/>
                {children}
            <Footer />
        </>
     );
}
 
export default Layout;