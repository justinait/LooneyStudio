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
          <Route path='/events' element={< Events />} />
          
          <Route path='/spatialDesign' element={< SpatialDesign />} />
          <Route path='/blanc' element={< Blanc />} />
          <Route path='/destree' element={< Destree />} />
          <Route path='/pink' element={< Pink />} />
          <Route path='/benefit' element={< Benefit />} />
          

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App