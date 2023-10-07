import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout';
import LandingPage from './pages/LandingPages';
import AboutUs from './pages/AboutUs';
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {
  return (
    <Router>
      <Provider store={store}>
        <Layout>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/test' element={<div>Test Route</div>} />
          </Routes>
        </Layout>
      </Provider>
    </Router>
  );
}

export default App
