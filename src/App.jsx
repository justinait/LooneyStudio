import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import CheckScroll from './CheckScroll'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <CheckScroll />
        <Routes>
          
          <Route path='/' element={< Home />} />
          
          {/* <Route path='/changes' element={< Changes />} />
          <Route path='/login' element={< Login />} />
          <Route path='/cart' element={< Cart />} />
          <Route path='/checkout' element={< Checkout />} /> */}
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App