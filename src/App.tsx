import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import TrainingPrograms from './components/TrainingPrograms';
import IntelligentSimulators from './components/IntelligentSimulators';
import Methodology from './components/Methodology';
import Results from './components/Results';
import Experts from './components/Experts';
import PartnershipInquiry from './components/PartnershipInquiry';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <Layout>
          <Hero />
          <ProblemSolution />
          <TrainingPrograms />
          <IntelligentSimulators />
          <Methodology />
          <Results />
          <Experts />
          <PartnershipInquiry />
          <Footer />
        </Layout>
      } />
      <Route path="/privacy" element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default App;
