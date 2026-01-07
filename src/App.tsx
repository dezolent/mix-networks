import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AssistedLivingPage from './components/AssistedLivingPage';
import EducationPage from './components/EducationPage';
import HostedPBXPage from './components/HostedPBXPage';
import BusinessContinuityPage from './components/BusinessContinuityPage';
import POTSReplacementPage from './components/POTSReplacementPage';
import POTSROIPage from './components/POTSROIPage';
import NetworkPage from './components/NetworkPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import LibraryPage from './components/LibraryPage';
import LibraryCategoryPage from './components/LibraryCategoryPage';

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
        <Route path="/pots-in-a-box" element={<POTSROIPage />} />
        <Route path="/network" element={<NetworkPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/library/blogs" element={<LibraryCategoryPage category="blog" />} />
        <Route path="/library/data-sheets" element={<LibraryCategoryPage category="data_sheet" />} />
        <Route path="/library/use-cases" element={<LibraryCategoryPage category="use_case" />} />
      </Routes>
    </Router>
  );
}

export default App;