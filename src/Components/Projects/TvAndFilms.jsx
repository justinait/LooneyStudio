import React from 'react'
import { Link } from 'react-router-dom'
import spray from '/sprays/tvSpray.png'
import './TvAndFilms.css'

function TvAndFilms() {
  const tvandfilms = [
    { name: 'WORLD OF TANKS - HOLIDAY', image: '/tvandfilms/WorldofTanks.gif', detail: '/', className: 'breakSpatialText'},
    { name: 'HEADIE ONE - THE LAST ONE', image: '/tvandfilms/HeadieOne.gif', detail: '/', className: 'breakSpatialText'},
    { name: 'SKY SPORTS', image: '/tvandfilms/SkySports.gif', detail: '/', className: ''},
    { name: 'HEADIE ONE - MARTIN’S SOFA', image: '/tvandfilms/HeadieOne-martins.gif', detail: '/', className: '' },
    { name: 'ABSOLUT - BORN TO MIX', image: '/tvandfilms/Absolut.gif', detail: '/', className: 'breakSpatialText'},
    { name: 'APPLE TV - EMANCIPATION', image: '/tvandfilms/willsmith.gif', detail: '/', className: 'breakSpatialText'},

    { name: 'HOARD', image: '/tvandfilms/HOARD.gif', detail: '/', className: ''},
    { name: 'CHRIS BROWN - CALL ME EVERYDAY', image: '/tvandfilms/ChrisBrown.gif', detail: '/', className: 'breakSpatialText'},
    { name: 'Puddle of muddles', image: '/tvandfilms/PuddleOfMuddles.gif', detail: '/', className: ''},
    { name: 'PALACE X EVISU', image: '/tvandfilms/PALACE_EVISU.gif', detail: '/', className: '' },
    { name: 'GOOGLE - HANDS RAISED', image: '/tvandfilms/google.gif', detail: '/', className: 'breakSpatialText'},
    { name: 'MET POLICE - LINE OF DUTY', image: '/tvandfilms/metpolice.gif', detail: '/', className: 'breakSpatialText'},

    { name: 'LOSKI - ROLLING DICE', image: '/tvandfilms/LoskiRolling.gif', detail: '/', className: ''},
    { name: 'AMAZON KIDS - ALPHABLOCKS', image: '/tvandfilms/amazonkids.gif', detail: '/', className: 'breakSpatialText'},
    { name: 'HEADIE ONE - CRY', image: '/tvandfilms/HeadieOneCry.gif', detail: '/', className: 'breakSpatialText'},
    { name: 'TENA - DISCREET', image: '/tvandfilms/Tena.gif', detail: '/', className: '' },
    { name: 'AMAZON - THE PREMIER LEAGUE', image: '/tvandfilms/PremierLeague.gif', detail: '/', className: 'breakSpatialText'},
    { name: 'TRINITY', image: '/tvandfilms/Trinity.gif', detail: '/', className: ''},

    { name: 'CHASING STARS FT. JAMES BAY', image: '/tvandfilms/chasingstars.gif', detail: '/', className: 'breakSpatialText'},
    { name: 'SONIA STEIN - ZOOM OUT', image: '/tvandfilms/SoniaStein.gif', detail: '/', className: 'breakSpatialText'},
    { name: 'TIDE - FOUNDERS MAKE SOME NOISE!', image: '/tvandfilms/Tide.gif', detail: '/', className: 'breakSpatialText'},
    { name: 'REXONA (SURE) 72HR', image: '/tvandfilms/Rexona.gif', detail: '/', className: '' },
    { name: 'INSIDE THE BLIND IRIS', image: '/tvandfilms/Insidetheblindiris.gif', detail: '/', className: ''},
    { name: 'alzheimers society', image: '/tvandfilms/Alzheimer.gif', detail: '/', className: 'breakSpatialText'},

    { name: 'BAKAR - NOUN', image: '/tvandfilms/bakar.gif', detail: '/', className: ''},
    { name: 'SLOW BURN', image: '/tvandfilms/SlowBurn.gif', detail: '/', className: ''},
    { name: 'TESCO - FOOD LOVE STORIES', image: '/tvandfilms/Tesco.gif', detail: '/', className: 'breakSpatialText'},
    { name: 'NETFLIX - CHOOSE OR DIE', image: '/tvandfilms/ChooseOrDie.gif', detail: '/', className: 'breakSpatialText' },
    { name: 'RBS - CHARIOTS OF DREAMS', image: '/tvandfilms/RBS.gif', detail: '/', className: 'breakSpatialText'},
    { name: 'BBC - the mezzotint', image: '/tvandfilms/BBC.gif', detail: '/', className: 'breakSpatialText'},

    { name: 'ZED, GRIFF - INSIDE OUT', image: '/tvandfilms/Zed.gif', detail: '/', className: ''},
    { name: 'JAMESON IRISH WHISKEY', image: '/tvandfilms/Jameson.gif', detail: '/', className: ''},
    { name: 'WIRED X HYUNDAI', image: '/tvandfilms/HYUNDAI.gif', detail: '/', className: 'breakSpatialText'},
    { name: 'CAPO LEE - STYLE & SWAG', image: '/tvandfilms/CapoLee.gif', detail: '/', className: '' },
    { name: 'ROCKS FOE - NITTY GRITTY', image: '/tvandfilms/RocksFoe.gif', detail: '/', className: ''},
    { name: 'WAVEY GARMS X ARG', image: '/tvandfilms/WAVEYGARMS.gif', detail: '/', className: 'breakSpatialText'},
  ]
  return (
    <div className='spatialContainer'>
      <div className='headerProjects'>
        <Link to={'/spatialDesign'} className='linksTv linksProjects projectsLeftLink'>SPATIAL DESIGN</Link>
        <p className='selectedProject'>TV & FILMS</p>
        <img src={spray} alt="" className='sprayTv' />
        <Link to={'/events'} className='linksTv linksProjects projectsRigthLink'>EVENTS & INSTALL</Link>
      </div>

      <div className='spatialImagesContainer'>
        {
        tvandfilms.map(e=>{
          return(
            <Link to={e.detail} className='spatialItemBox' >
              <img src={e.image} alt={e.name} className='spatialImage'/>
              <div className='imageOverlay'></div>
              <p className={`spatialText ${e.className}`}>{e.name}</p>
            </Link>
          )
        })
          
        }
      </div>
    </div>
  )
}

export default TvAndFilms