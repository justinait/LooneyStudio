import React, { useEffect, useState } from 'react'
import './Header.css'
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '/menuIcon.png'
import CloseIcon from '/closeIcon.png'
import arrow from '/arrow.png'
import arrowback from '/arrowback.png'
import ig from '/instagram.png'
import spray from '/sprays/aboutSpray.png'
import spray2 from '/sprays/AssetsHero.png'

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openNextMenu, setOpenNextMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('home')
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const handleOpen = () => {
    if(openMenu)
      return setOpenMenu(false);
    else 
      return setOpenMenu(true);
  }
  
  const handleClose = (id) => {
    setOpenMenu(false);
    setOpenNextMenu(false);
    if(id){
      setSelectedCategory(id);
    }
  }
  const handleNextMenu = ()=> {
    setOpenNextMenu(true);
  }
  const handlePrevMenu = ()=> {
    setOpenNextMenu(false);
    setOpenMenu(true);
  }
  const sections = [
    { name: 'SERVICES', id: 'services', className: '' },
    { name: 'ABOUT', id: 'about', className: ''},
    { name: 'CONTACT', id: 'contact', className: ''}
  ]

  const nextSections = [
    { name: 'TV & FILMS', id: 'tvandfilms', className: '' },
    { name: 'EVENTS & INSTALLATIONS', id: 'events', className: ''},
    { name: 'SPATIAL DESIGN', id: 'spatialDesign', className: ''}
  ]
  return (
    <div className='headerContainer'>
      <div className='initialHeader'>
        <Link to='/' className='navbarLooney'>THE LOONEY STUDIO</Link>
        {openMenu ?
        <img src={CloseIcon}  onClick={handleClose} className='closeMenuIcon' alt="Menu" />:
        <img src={MenuIcon}  onClick={handleOpen} className='burgerMenuIcon' alt="Menu" />
        
        }
      </div>

      {openMenu &&
        <div className='dropdownHeader'>
          
          <div className='dropdownItemsContainer'>
            <p  onClick={()=>handleNextMenu()} className={selectedCategory == 'projects'? 'activeNavbar projects': 'projects'}>PROJECTS              <img src={arrow} alt=">" />            </p>
          
            {sections.map((e, i)=> {
              return (
              <Link 
                key={i} 
                to={`/${e.id}`} 
                onClick={()=>handleClose(e.id)} 
                className={selectedCategory == e.id? 'activeNavbar': ''}>
                {e.name}
              </Link>)
            })}
            
          </div>
          <img src={spray} alt="" className='sprayDropdown1' />
          <img src={ig} alt="Instagram" className='igIconNavbar'/>
        </div>
      }
      {openNextMenu &&
        <div className='dropdownHeader nextDropdown'>
          
          <div className='dropdownItemsContainer'>
            <p  onClick={()=>handlePrevMenu()} className={selectedCategory == 'projects'? 'activeNavbar projects': 'projects'}> <img src={arrowback} alt="<" />            </p>
            <img src={spray2} alt="" className='sprayDropdown2' />
            
            {nextSections.map((e, i)=> {
              return (
              <Link 
                key={i} to={`/${e.id}`} 
                onClick={()=>handleClose(e.id)} 
                className={selectedCategory == e.id? 'activeNavbar nextSections': 'nextSections'}>
                {e.name}
              </Link>)
            })}
            
          <img src={ig} alt="Instagram" className='igIconNavbar'/>
            
          </div>
        </div>
      }
    </div>
  )
}

export default Header