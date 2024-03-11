import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import CheckScroll from './CheckScroll'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services';

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
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App