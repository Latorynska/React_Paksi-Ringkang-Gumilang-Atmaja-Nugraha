import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({children}) => {
    
    const navs = [
        { label: "Home", url: "" },
        { label: "Create Product", url: "/" },
        { label: "Create Account", url: "/create-account" },
    ];

    return ( 
        <>
            <Header navs={navs}/>
            <main className="container">
                {children}
            </main>
            <Footer />
        </>
     );
}
 
export default Layout;