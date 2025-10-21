import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Blog from './components/Blog.jsx';
import NotFound from './components/NotFound.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;