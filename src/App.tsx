import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Index from './pages/Index';
import Services from './pages/Services';
import AIConsulting from './pages/services/AIConsulting';
import CustomDevelopment from './pages/services/CustomDevelopment';
import ProcessAutomation from './pages/services/ProcessAutomation';
import AISecurity from './pages/services/AISecurity';
import About from './pages/about/About';
import Solutions from './pages/solutions/index';
import AISolutions from './pages/solutions/AISolutions';
import DataSolutions from './pages/solutions/DataSolutions';
import ITInfrastructure from './pages/solutions/ITInfrastructure';
import CloudServices from './pages/solutions/CloudServices';
import Contact from './pages/contact/Contact';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import EmotionalAIFuture from './pages/blog/EmotionalAIFuture';
import NeuralEmotions from './pages/blog/NeuralEmotions';
import AIMentalHealth from './pages/blog/AIMentalHealth';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/ai-consulting" element={<AIConsulting />} />
        <Route path="/services/custom-development" element={<CustomDevelopment />} />
        <Route path="/services/process-automation" element={<ProcessAutomation />} />
        <Route path="/services/ai-security" element={<AISecurity />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions/ai" element={<AISolutions />} />
        <Route path="/solutions/data" element={<DataSolutions />} />
        <Route path="/solutions/it-infrastructure" element={<ITInfrastructure />} />
        <Route path="/solutions/cloud" element={<CloudServices />} />
        <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/blog/emotional-ai-future" element={<EmotionalAIFuture />} />
            <Route path="/blog/neural-emotions" element={<NeuralEmotions />} />
            <Route path="/blog/ai-mental-health" element={<AIMentalHealth />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
