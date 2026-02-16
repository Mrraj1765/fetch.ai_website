import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Teams from './components/Teams';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MissionVision from './components/MissionVision';
import FAQ from './components/FAQ';
import TeamsPage from './pages/TeamsPage';
import GalleryPage from './pages/GalleryPage';

// Home Component to group the landing page sections
const Home = () => (
  <>
    <Hero />
    <About />
    <MissionVision />
    <Teams />
    <Gallery />
    <FAQ />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teams" element={<TeamsPage />} />
            <Route path="/events" element={<GalleryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
