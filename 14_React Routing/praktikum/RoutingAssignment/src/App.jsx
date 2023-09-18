import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/createProductStyles.css';
import './assets/landingPageStyles.css';
import CreateProduct from './pages/CreateProduct';
import CreateAccount from './pages/CreateAccount';
import LandingPage from './pages/LandingPage';
import Layout from './layout/Layout';

function App() {

  return (
      <Router>
        <Layout>
          <Routes>
            <Route path="/create-account" element={<CreateAccount/>} exact />
            <Route path="/create-product" element={<CreateProduct/>} exact />
            <Route path="/" element={<LandingPage/>} exact />
          </Routes>
        </Layout>
      </Router>
  )
}

export default App
