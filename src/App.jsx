import { BrowserRouter } from "react-router-dom";
import { useState, useEffect} from "react";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  LazyLoadedStarsCanvas,
  StarsCanvas
} from "./components";
import LazyLoadedContactCanvas from "./components/LazyLoadedContactCanvas";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [currentSection, setCurrentSection] = useState('');


  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'tech', 'works', 'contact'];
      const sectionInView = sections.find((section) => {
        const el = document.getElementById(section);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
      });
      if (sectionInView) setCurrentSection(sectionInView);
    };
  
    if (isMobile) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  
    return undefined;
  }, [isMobile]);
  
  const shouldRenderContactCanvas = isMobile && currentSection === 'contact';
  const shouldRenderHeroCanvas = currentSection === 'hero';
  const shouldRenderWorksCanvas = isMobile && currentSection === 'works';

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className=" bg-cover bg-no-repeat bg-center relative z-1">
          <Navbar />
          {isMobile && <LazyLoadedStarsCanvas shouldRender={shouldRenderHeroCanvas} />}
          {!isMobile && <StarsCanvas/>}
          <Hero isMobile={isMobile}/>
        </div>
        <div>
          <About/>
          <Experience />
          {!isMobile && <Tech/>}
          <Works />
          <div className="relative z-0">
            {isMobile && (
              <LazyLoadedContactCanvas
                shouldRender={shouldRenderWorksCanvas || shouldRenderContactCanvas}
              />
            )}
            {!isMobile && <Contact />}
            {!isMobile && <StarsCanvas/>}
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
