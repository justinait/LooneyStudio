import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import CheckScroll from './CheckScroll'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import TvAndFilms from './Components/Projects/TvAndFilms';
import SpatialDesign from './Components/SpatialDesign/SpatialDesign';
import Events from './Components/Events/Events';
import Blanc from './Components/SpatialDesign/Blanc';
import Destree from './Components/SpatialDesign/Destree';
import Pink from './Components/SpatialDesign/Pink';
import Benefit from './Components/SpatialDesign/Benefit';
import Gisou from './Components/SpatialDesign/Gisou';
import Huda from './Components/SpatialDesign/Huda';
import Warner from './Components/Events/Warner';
import Sezane from './Components/Events/Sezane';
import WWE from './Components/Events/WWE';
import Places from './Components/Events/Places';
import WarnerTwo from './Components/Events/WarnerTwo';
import Elton from './Components/Events/Elton';
import Molecules from './Components/Events/Molecules';
import Dazed from './Components/Events/Dazed';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <CheckScroll />
        <Routes>
          
          <Route path='/' element={< Home />} />
          <Route path='/contact' element={< Contact />} />
          <Route path='/services' element={< Services />} />
          <Route path='/about' element={< About />} />

          <Route path='/tvandfilms' element={< TvAndFilms />} />
          
          <Route path='/spatialDesign' element={< SpatialDesign />} />
          <Route path='/blanc' element={< Blanc />} />
          <Route path='/destree' element={< Destree />} />
          <Route path='/pink' element={< Pink />} />
          <Route path='/benefit' element={< Benefit />} />
          <Route path='/gisou' element={< Gisou />} />
          <Route path='/huda' element={< Huda />} />
          
          <Route path='/events' element={< Events />} />
          <Route path='/warner23' element={< Warner />} />
          <Route path='/sezane' element={< Sezane />} />
          <Route path='/wwe' element={< WWE />} />
          <Route path='/places' element={< Places />} />
          <Route path='/warner22' element={< WarnerTwo />} />
          <Route path='/elton' element={< Elton />} />
          <Route path='/molecules' element={< Molecules />} />
          <Route path='/dazed' element={< Dazed />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App