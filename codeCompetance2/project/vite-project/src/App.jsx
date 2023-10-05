import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout';
import LandingPage from './pages/LandingPages';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/test' element={<div>Test Route</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App
