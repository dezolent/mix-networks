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
import HardwarePage from './components/HardwarePage';
import IPPhonesPage from './components/IPPhonesPage';
import POTSReplacementCategoryPage from './components/POTSReplacementCategoryPage';
import RoutersGatewaysPage from './components/RoutersGatewaysPage';
import HeadsetsPage from './components/HeadsetsPage';
import PagingPage from './components/PagingPage';
import ATAPage from './components/ATAPage';

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
        <Route path="/hardware" element={<HardwarePage />} />
        <Route path="/hardware/ip-phones" element={<IPPhonesPage />} />
        <Route path="/hardware/pots-replacement" element={<POTSReplacementCategoryPage />} />
        <Route path="/hardware/ata" element={<ATAPage />} />
        <Route path="/hardware/routers-gateways" element={<RoutersGatewaysPage />} />
        <Route path="/hardware/headsets" element={<HeadsetsPage />} />
        <Route path="/hardware/paging" element={<PagingPage />} />
      </Routes>
    </Router>
  );
}

export default App;