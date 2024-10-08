import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Info from "./components/Info"
import Footer from "./components/Footer"
import Services from "./components/Services"
import Pricing from "./components/Pricing"
import Contact from "./components/Contact"
import Login from "./components/Login"
import Register from "./components/Register"

const App = () => {
  const location = useLocation();
  const showNavbar = location.pathname !== '/login' && location.pathname !== '/register';

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cya-900">
      <div className="fixed top-0 -z-10 h-full w-full"></div>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={
          <>
            <div id="home">
              <Home />
            </div>
            <div id="info">
              <Info />
            </div>
            <div id="services">
              <Services />
            </div>
            <div id="pricing">
              <Pricing />
            </div>
            <div id="contact">
              <Contact />
            </div>
            <Footer />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
