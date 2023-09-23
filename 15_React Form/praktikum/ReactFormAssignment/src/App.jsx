import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/createProductStyles.css';
import './assets/landingPageStyles.css';
import CreateProduct from './pages/CreateProduct';
import CreateAccount from './pages/CreateAccount';
import LandingPage from './pages/LandingPage';
import Layout from './layout/Layout';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import PrivateRoute from './routes/PrivateRoute';
import AccountDetails from './pages/AccountDetails';
import ProductDetails from './pages/ProductDetails';
import Register from './pages/Register';
import Logout from './pages/Logout';

function App() {

  return (
      <Router>
        <AuthProvider>
          <Layout>
            <Routes>
              <Route element={ <PrivateRoute /> }>
                <Route path="/account-details/:uuid" element={ <AccountDetails /> }/>
                <Route path="/product-details/:uuid" element={ <ProductDetails /> }/>
              </Route>
              <Route path="/create-account" element={ <CreateAccount/> } exact />
              <Route path="/create-product" element={ <CreateProduct/> } exact />
              <Route path="/login" element={ <Login /> } />
              <Route path="/logout" element={ <Logout /> } />
              <Route path="/register" element={ <Register /> } />
              <Route path="/" element={ <LandingPage/> } exact />
            </Routes>
          </Layout>
        </AuthProvider>
      </Router>
  )
}

export default App
