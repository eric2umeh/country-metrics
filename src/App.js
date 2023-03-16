import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import DetailsPage from './pages/DetailsPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:cc" element={<DetailsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
