import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout';
import LandingPage from './pages/LandingPages';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App
