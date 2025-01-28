import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aavartan from "./pages/Aavartan";
import Vigyaan from "./pages/Vigyaan";
import Ignite from "./pages/Ignite";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Navigation from "./layout/Navigation";
import ScrollTop from "./layout/ScrollTop";
import Login from "./layout/Login";
import HailTechno from "./layout/HailTechno";
import styled from "styled-components";
import ProblemStatements from "./pages/ProblemStatements";
import TeamPage from "./pages/TeamPage";
import EventsGalleryPage from "./pages/EventsGalleryPage";
import VigyaanGalleryPage from "./pages/VigyaanGalleryPage";
import SponsorsPage from "./pages/SponsorsPage";

import TechTeam from "./pages/TechTeam";
import BlogPage from "./pages/BlogPage";
import BlogSinglePage from "./pages/BlogSinglePage";
import EventPage from "./pages/EventPage";
import EventFormPage from "./pages/EventFormPage";

//Forms
import SpeedCubingForm from "./forms/SpeedCubingForm";
import ValorantForm from "./forms/ValorantForm";
import TreasureHuntForm from "./forms/TreasureHuntForm";
import EcopolisForm from "./forms/Ecopolis";
import OpenMicForm from "./forms/OpenMicForm";
import ChatAssistant from "../src/components/ChatAssistant";
import CodeSprintRelayForm from "./forms/CodeSprintRelay";
import DsaMarathonForm from "./forms/DsaMarathonForm";
import DimensionsForm from "./forms/DimensionsForm.js";
import DroneRaceForm from "./forms/DroneRaceForm.js";
import ReverseCodingForm from "./forms/ReverseCodingForm.js";
import CaseOpsForm from "./forms/CaseOpsForm.js";
import EscapeTheMatrixForm from "./forms/EscapeTheMatrixForm.js";
import OctoberSkyForm from "./forms/OctoberSky.js";
import PixelPlaygroundForm from "./forms/PixelPlaygroundForm.js";
import TechnoGraphixForm from "./forms/TechnoGraphixForm.js";
import WorkshopsForm from "./forms/WorkshopsForm.js";
import RoboWarsForm from "./forms/RoboWarsForm.js";
import RoboRaceForm from "./forms/RoboRaceForm.js";
import JengaForm from "./forms/JengaForm.js";
import CornholeGameForm from "./forms/CornHoleForm.js";
import WorkshopVDAForm from "./forms/WorkshopVDAForm.js";

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
      <ChatAssistant />
      <CustomCursorContainer>
        <ContentContainer>
          <BrowserRouter>
            <Navigation />
            <Login />
            <ScrollTop />
            <HailTechno />
            <Navbar />
            <Routes>
              <Route exact="true" path="/" element={<Homepage />} />
              <Route exact="true" path="/aavartan" element={<Aavartan />} />
              <Route
                exact="true"
                path="/blog-single"
                element={<BlogSinglePage />}
              />
              <Route exact="true" path="/blog" element={<BlogPage />} />

              {/* Events */}
              <Route exact="true" path="/events" element={<EventPage />} />
              <Route
                exact="true"
                path="/event-form"
                element={<EventFormPage />}
              />
              <Route
                exact="true"
                path="/events/SpeedCubingForm"
                element={<SpeedCubingForm />}
              />
              <Route
                exact="true"
                path="/events/ValorantForm"
                element={<ValorantForm />}
              />
              <Route
                exact="true"
                path="/events/TreasureHuntForm"
                element={<TreasureHuntForm />}
              />
              <Route
                exact="true"
                path="/events/EcopolisForm"
                element={<EcopolisForm />}
              />
              <Route
                exact="true"
                path="/events/DimensionsForm"
                element={<DimensionsForm />}
              />
              <Route
                exact="true"
                path="/events/OctoberSkyForm"
                element={<OctoberSkyForm />}
              />
              <Route
                exact="true"
                path="/events/Pixelplaygroundform"
                element={<PixelPlaygroundForm />}
              />
              <Route
                exact="true"
                path="/events/TechnographixForm"
                element={<TechnoGraphixForm />}
              />

              <Route
                exact="true"
                path="/events/CodesprintrelayForm"
                element={<CodeSprintRelayForm />}
              />
               <Route
                exact="true"
                path="/events/OpenMicForm"
                element={<OpenMicForm />}
              />
              <Route
                exact="true"
                path="/events/DsaMarathonForm"
                element={<DsaMarathonForm />}
              />
              <Route
                exact="true"
                path="/events/DroneraceForm"
                element={<DroneRaceForm />}
              />
              <Route
                exact="true"
                path="/events/ReverseCodingForm"
                element={<ReverseCodingForm />}
              />
              <Route
                exact="true"
                path="/events/CaseopsForm"
                element={<CaseOpsForm />}
              />
              <Route
                exact="true"
                path="/events/EscapeTheMatrixForm"
                element={<EscapeTheMatrixForm />}
              />
              <Route
                exact="true"
                path="/events/WorkshopsForm"
                element={<WorkshopsForm/>}
              />
              <Route
                exact="true"
                path="/events/RoboWarsForm"
                element={<RoboWarsForm/>}
              />
              <Route
                exact="true"
                path="/events/JengaForm"
                element={<JengaForm />}
              />
              <Route
                exact="true"
                path="/events/RoboRaceForm"
                element={<RoboRaceForm />}
              />
              <Route
                exact="true"
                path="/events/CornHoleForm"
                element={<CornholeGameForm />}
              />
              <Route
                exact="true"
                path="/events/WorkshopVDAForm"
                element={<WorkshopVDAForm />}
              />

              <Route
                exact="true"
                path="/aavartan/gallery"
                element={<EventsGalleryPage />}
              />
              <Route
                exact="true"
                path="/vigyaan/gallery"
                element={<VigyaanGalleryPage />}
              />

              <Route exact="true" path="/vigyaan" element={<Vigyaan />} />
              <Route exact="true" path="/ignite" element={<Ignite />} />
              <Route exact="true" path="/team" element={<TeamPage />} />
              <Route
                exact="true"
                path="/vigyaan/statements/:branch"
                element={<ProblemStatements />}
              />
              <Route exact="true" path="/sponsors" element={<SponsorsPage />} />
              <Route exact="true" path="/tech-team" element={<TechTeam />} />
              {/* <Route exact path="/ourjourney" element={<OurJourney />} /> */}
            </Routes>
            <Footer />
          </BrowserRouter>
        </ContentContainer>
        <BackgroundContainer>
           {/* <ParticlesBackground /> */}


           {/* <StarFieldAnimation/> */}

        </BackgroundContainer>
        <ScrollTop/>
      </CustomCursorContainer>
    </div>
  );
}

export default App;
