import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Products from './components/Products';
import Advantages from './components/Advantages';
import Methodologist from './components/Methodologist';
import Audience from './components/Audience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <Layout>
          <Hero />
          <Problems />
          <Products />
          <Advantages />
          <Methodologist />
          <Audience />
          <Contact />
          <Footer />
        </Layout>
      } />
      <Route path="/privacy" element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default App;
