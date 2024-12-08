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

// import StarFieldAnimation from "./layout/StarFieldAnimation";
import TechTeam from "./pages/TechTeam";
import BlogPage from "./pages/BlogPage";
import BlogSinglePage from "./pages/BlogSinglePage";
import EventPage from "./pages/EventPage";
import EventFormPage from "./pages/EventFormPage";
import TerrainTreaderForm from "./forms/TerrainTreaderForm";
import RoboSoccerForm from "./forms/RoboSoccerForm";
import BgmiForm from "./forms/BgmiForm";
import AerofiliaForm from "./forms/AerofiliaForm";
import LogoDesignForm from "./forms/LogoDesignForm";
import SpeedCubingForm from "./forms/SpeedCubingForm";
import CodemimeQuestForm from "./forms/CodemimeQuestForm";
import Circuitrix2Form from "./forms/Circuitrix2Form";
import ValorantForm from "./forms/ValorantForm";
import AutocadForm from "./forms/AutocadForm";
import SurvivalArtboardForm from "./forms/SurvivalArtboardForm";
import ReactionRacingForm from "./forms/ReactionRacingForm";
import TreasureHuntForm from "./forms/TreasureHuntForm";
import MechanicalJunkyardForm from "./forms/MechanicalJunkyardForm";
import TalentShowForm from "./forms/TalentShowForm";
import TicTacToeForm from "./forms/TicTacToeForm";
import EcopolisForm from "./forms/Ecopolis";
import HydroliftForm from "./forms/Hydrolift";

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
              <Route exact="true" path="/events" element={<EventPage />} />
              <Route
                exact="true"
                path="/event-form"
                element={<EventFormPage />}
              />
              <Route
                exact="true"
                path="/events/terrainTreaderForm"
                element={<TerrainTreaderForm />}
              />
              <Route
                exact="true"
                path="/events/roboSoccerForm"
                element={<RoboSoccerForm />}
              />
              <Route
                exact="true"
                path="/events/bgmiForm"
                element={<BgmiForm />}
              />
              <Route
                exact="true"
                path="/events/aerofiliaForm"
                element={<AerofiliaForm />}
              />
              <Route
                exact="true"
                path="/events/logoDesignForm"
                element={<LogoDesignForm />}
              />
              <Route
                exact="true"
                path="/events/speedCubingForm"
                element={<SpeedCubingForm />}
              />
              <Route
                exact="true"
                path="/events/codemimeQuestForm"
                element={<CodemimeQuestForm />}
              />
              <Route
                exact="true"
                path="/events/circuitrix2Form"
                element={<Circuitrix2Form />}
              />
              <Route
                exact="true"
                path="/events/valorantForm"
                element={<ValorantForm />}
              />
              <Route
                exact="true"
                path="/events/autocadForm"
                element={<AutocadForm />}
              />
              <Route
                exact="true"
                path="/events/survivalForm"
                element={<SurvivalArtboardForm />}
              />
              <Route
                exact="true"
                path="/events/reactionRacingForm"
                element={<ReactionRacingForm />}
              />
              <Route
                exact="true"
                path="/events/treasureHuntForm"
                element={<TreasureHuntForm />}
              />
              <Route
                exact="true"
                path="/events/mechanicalJunkyardForm"
                element={<MechanicalJunkyardForm />}
              />
              <Route
                exact="true"
                path="/events/talentShowForm"
                element={<TalentShowForm />}
              />
              <Route
                exact="true"
                path="/events/tictacToeForm"
                element={<TicTacToeForm />}
              />
              <Route
                exact="true"
                path="/events/ecopolisForm"
                element={<EcopolisForm />}
              />
              <Route
                exact="true"
                path="/events/hydroliftForm"
                element={<HydroliftForm />}
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
//           {/* <ParticlesBackground /> */}
// <<<<<<< main
// //           <StarFieldAnimation />
// =======
//           {/* <StarFieldAnimation/> */}
// >>>>>>> dev
        </BackgroundContainer>
      </CustomCursorContainer>
    </div>
  );
}

export default App;
