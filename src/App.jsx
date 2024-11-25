import { BrowserRouter } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import { About, Contact, Experience, Feedbacks, Navbar, Tech, Works, HeroSec } from "./components";


function App() {
  return (
    <BrowserRouter>
      <Analytics />
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <HeroSec />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
