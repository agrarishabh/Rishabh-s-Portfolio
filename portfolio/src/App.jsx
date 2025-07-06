// App.jsx
import React, { useEffect, useRef, useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Footer from "./components/Footer";
import MoreAbout from "./components/MoreAbout";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Timeout failsafe: if video doesn’t load in 5 seconds, hide loader anyway
    const timeout = setTimeout(() => setIsLoaded(true), 5000);

    const handleVideoReady = () => {
      clearTimeout(timeout);
      setIsLoaded(true);
    };

    if (videoRef.current) {
      videoRef.current.addEventListener("canplaythrough", handleVideoReady);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("canplaythrough", handleVideoReady);
      }
    };
  }, []);

  return (
    <div className="text-[#d9d9d9]">
      {!isLoaded && <Loader />}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        id="bg-video"
        className="fixed top-0 left-0 w-screen h-screen object-cover -z-10"
      >
        <source src="/videos/galaxy.mp4" type="video/mp4" />
      </video>

      {isLoaded && (
        <>
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
        </>
      )}
    </div>
  );
};

export default App;
