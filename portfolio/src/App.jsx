import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import MoreAbout from './components/MoreAbout';
const App = () => {
  return (
    <div className="text-[#d9d9d9]">
      <Navbar />
      <main className="space-y-32">
        <Home />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <MoreAbout />
        <Footer />
      </main>
    </div>
  );
};

export default App;
