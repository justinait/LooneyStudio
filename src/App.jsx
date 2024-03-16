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
import SpatialDesign from './Components/Projects/SpatialDesign';
import Events from './Components/Projects/Events';

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
          <Route path='/events' element={< Events />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App