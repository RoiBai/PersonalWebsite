import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import About from "./routes/About";
import Art from "./routes/Art";
import Contact from "./routes/Contact";
import Games from "./routes/Games";
import Home from "./routes/Home";
import Ongoing from "./routes/Ongoing";
import Plog from "./routes/Plog";
import ProjectDetail from "./routes/ProjectDetail";
import Research from "./routes/Research";
import ScrollProgress from "./components/ScrollProgress";
import Tangible from "./routes/Tangible";

const TAROT_SITE_DEMO_PATH = "/art/tarot-site/demo";
const EARTH_ARCHIVE_DEMO_PATH = "/art/Earth-is-not-humanitys-alone/demo";

export default function App() {
  const location = useLocation();
  const reduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Nav />
      <ScrollProgress />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/art" element={<Art />} />
            <Route path="/art/:projectId" element={<ProjectDetail />} />
            <Route path="/games" element={<Games />} />
            <Route path="/games/:projectId" element={<ProjectDetail />} />
            <Route path="/tangible" element={<Tangible />} />
            <Route path="/tangible/:projectId" element={<ProjectDetail />} />
            <Route path="/ongoing" element={<Ongoing />} />
            <Route path="/ongoing/:projectId" element={<ProjectDetail />} />
            <Route path="/developer" element={<Navigate to="/ongoing" replace />} />
            <Route path="/rewind" element={<ProjectDetail projectIdOverride="rewind-past-self" />} />
            <Route path={TAROT_SITE_DEMO_PATH} element={null} />
            <Route path={`${TAROT_SITE_DEMO_PATH}/*`} element={null} />
            <Route path={EARTH_ARCHIVE_DEMO_PATH} element={null} />
            <Route path={`${EARTH_ARCHIVE_DEMO_PATH}/*`} element={null} />
            <Route path="/tarot" element={<ProjectDetail projectIdOverride="tarot-reflection" />} />
            <Route path="/zoi" element={<ProjectDetail projectIdOverride="zoi" />} />
            <Route path="/plog" element={<Plog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
