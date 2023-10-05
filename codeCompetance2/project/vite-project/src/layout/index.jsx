import Footer from "../components/Footer";
import Header from "../components/Header";
import './styles.css';

const Layout = ({ children }) => {
    return ( 
        <>
            <Header />
            <div className="content">
                { children }
            </div>
            <Footer />
        </>
     );
}
 
export default Layout;