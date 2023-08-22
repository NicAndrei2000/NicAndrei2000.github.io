import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import IntroductionPage from "./pages/introductionPage/introductionPage";
import AboutMe from "./pages/AboutMe/AboutMe";
import Skills from "./pages/Skills/Skills";
import EduProVol from "./pages/EduProVol/EduProVol";
import MyProjects from "./pages/MyProjects/MyProjects";
import ViewProjectDetail from "./pages/ViewProjectDetail/ViewProjectDetail";
import ContactMe from "./pages/ContactMe/ContactMe";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <IntroductionPage/>
                <AboutMe/>
                <EduProVol/>
                <Skills />
                <MyProjects />
                <ContactMe />
              </>
            }
          />
          <Route
            path="/ProjectsCategory/:projectName"
            element={<ViewProjectDetail />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
