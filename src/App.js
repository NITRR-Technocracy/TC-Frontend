import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aavartan from "./pages/Aavartan";
import Vigyaan from "./pages/Vigyaan";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Navigation from "./layout/Navigation";
import ScrollTop from "./layout/ScrollTop";
import Login from "./layout/Login";
import HailTechno from "./layout/HailTechno";
import styled from "styled-components";
import ParticlesBackground from "./layout/ParticlesBackground";
import ProblemStatements from "./pages/ProblemStatements";
import TeamPage from "./pages/TeamPage";
import EventsGalleryPage from "./pages/EventsGalleryPage";
import VigyaanGalleryPage from "./pages/VigyaanGalleryPage";
import SponsorsPage from "./pages/SponsorsPage";
import OurJourney from "./sections/OurJourney";
import { StarField } from "starfield-react";
import StarFieldAnimation from "./layout/StarFieldAnimation";
import About from "./components/About"

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden; /* Ensure the starfield doesn't overflow the container */
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
`;

function CustomCursorContainer({ children }) {
  return <div className="custom-cursor">{children}</div>;
}

function App() {
  return (
    <div>
      <CustomCursorContainer>
        <ContentContainer>
          <BrowserRouter>
              <Navbar />
              <Navigation />
              <Login />
              <ScrollTop />
              <HailTechno />
              <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route exact path="/aavartan" element={<Aavartan />} />
                <Route
                  exact
                  path="/aavartan/gallery"
                  element={<EventsGalleryPage />}
                />
                <Route
                  exact
                  path="/vigyaan/gallery"
                  element={<VigyaanGalleryPage />}
                />
                <Route exact path="/vigyaan" element={<Vigyaan />} />
                <Route exact path="/team" element={<TeamPage />} />
                <Route
                  exact
                  path="/vigyaan/statements/:branch"
                  element={<ProblemStatements />}
                />
                <Route exact path="/sponsors" element={<SponsorsPage />} />
                {/* <Route exact path="/ourjourney" element={<OurJourney />} /> */}
              </Routes>
              <Footer />
          </BrowserRouter>
        </ContentContainer>
        <BackgroundContainer>
          {/* <ParticlesBackground /> */}
          <StarFieldAnimation/>
        </BackgroundContainer>
      </CustomCursorContainer>  


    </div>
  );
}

export default App;
