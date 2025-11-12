import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AssistedLivingPage from './components/AssistedLivingPage';
import EducationPage from './components/EducationPage';
import HostedPBXPage from './components/HostedPBXPage';
import BusinessContinuityPage from './components/BusinessContinuityPage';
import POTSReplacementPage from './components/POTSReplacementPage';
import NetworkPage from './components/NetworkPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/assisted-living" element={<AssistedLivingPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/hosted-pbx" element={<HostedPBXPage />} />
        <Route path="/business-continuity" element={<BusinessContinuityPage />} />
        <Route path="/pots-replacement" element={<POTSReplacementPage />} />
        <Route path="/network" element={<NetworkPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;