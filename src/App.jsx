import { BrowserRouter, Routes, Route } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Projects, Tech, Works, StarsCanvas } from "./components";
import { ThemeProvider } from "./context/ThemeContext";

const Home = () => {
  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={
            <div className='bg-primary min-h-screen'>
              <Navbar />
              <div className='pt-32'>
                <Projects />
              </div>
            </div>
          } />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
