import React from 'react'
import hero from '/spatial/benefitdetail.png'
import './SpatialDesign.css'
import circle1 from '/spatial/circle1.png'
import circle2 from '/spatial/circle2.png'
import circle3 from '/spatial/circle3.png'
import circle4 from '/spatial/circle4.png'
import circle6 from '/spatial/circle6.png'
import circle9 from '/spatial/circle9.png'
import xSpray from '/spatial/xSpray.png'
import image1 from '/spatial/benefit1.png'
import image2 from '/spatial/benefit2.png'
import image3 from '/spatial/benefit3.png'
import image4 from '/spatial/benefit4.png'
import image5 from '/spatial/benefit9.jpeg'
import image6 from '/spatial/benefitSpecial.jpg'
import image7 from '/spatial/benefit6.jpeg'
import image8 from '/spatial/benefit7.jpg'
import image9 from '/spatial/benefit8.jpg'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'


function Benefit() {
  const downloadPDF = () => {
    const pdfPath = 'https://drive.google.com/file/d/1GFXSvEgasJ8hQkK-lL0HCxJbYplJHhk6/view';
    const link = document.createElement('a');
    link.href = pdfPath;
    link.target = '_blank';
    link.download = 'CaseStudyBenefit.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      
      <div className='arrowsContainer'>
        <Link to={'/pink'} className='arrowsEvents arrowSpatial'>{"<"}</Link>
        
        <img src={xSpray} className='xSpraySpatial' alt="" />
        <Link to={'/spatialDesign'}><p className='xTvDetail'>X</p></Link>
        
        <Link to={'/gisou'} className='arrowsEvents arrowSpatial'>{">"}</Link>
      </div>

      <img src={hero} alt="BENEFIT" className='blancHero'/>
      <div className='stackContainer stackContainerBenefit'>
        <div className='stackItem2 stackItemDesktop15'>
          <img className='stackCircleImg' src={circle2} alt="" />
          <p className='stackText'>CONCEPT DESIGN</p>
        </div>
        <div className='stackItemPink1'>
          <img className='stackCircleImg' src={circle6} alt="" />
          <p className='stackText'>PROJECT MANAGEMENT</p>
        </div>
        <div className='stackItemPink3 stackItemDesktop10'>
          <img className='stackCircleImg' src={circle3} alt="" />
          <p className='stackText'>PROP MAKING</p>
        </div>

        <div className='stackItem4'>
          <img className='stackCircleImg' src={circle6} alt="" />
          <p className='stackText'>INSTALLATION</p>
        </div>
        <div className='stackItem1'>
          <img className='stackCircleImg' src={circle1} alt="" />
          <p className='stackText'>LIGHTING DESIGN</p>
        </div>
        <div className='stackItem1 stackItemSpecial'>
          <img className='stackCircleImgBig' src={circle9} alt="" />
          <p className='stackText stackTextBig'>FINISHING & <br />SPRYING</p>
        </div>
        <div className='stackItem4'>
          <img className='stackCircleImg' src={circle4} alt="" />
          <p className='stackText'>CARPENTRY</p>
        </div>
          
      </div>
      {/* <div className='stackContainer stackContainerBenefit desktopOnly'>
        <div className='stackItem2 stackItemDesktop15'>
          <img className='stackCircleImg' src={circle1} alt="" />
          <p className='stackText'>CONCEPT DESIGN</p>
        </div>
        <div className='stackItemPink1'>
          <img className='stackCircleImg' src={circle4} alt="" />
          <p className='stackText'>PROJECT MANAGEMENT</p>
        </div>
        <div className='stackItemDestree3'>
          <img className='stackCircleImg' src={circle1} alt="" />
          <p className='stackText'>LIGHTING DESIGN</p>
        </div>
        <div className='stackItem4'>
          <img className='stackCircleImg' src={circle6} alt="" />
          <p className='stackText'>INSTALLATION</p>
        </div>
        <div className='stackItem4'>
          <img className='stackCircleImg' src={circle3} alt="" />
          <p className='stackText'>CARPENTRY</p>
        </div>
        <div className='stackItem1'>
          <img className='stackCircleImg' src={circle4} alt="" />
          <p className='stackText'>PROP MAKING</p>
        </div>

        <div className='stackItemPink4'>
          <img className='stackCircleImgBig' src={circle9} alt="" />
          <p className='stackText stackTextBig'>FINISHING & <br />SPRAYING</p>
        </div>
          
      </div> */}
      <div className='colorSpace'>
        <div className='benefitBoxForPDF'>
          <p className='titleSpatialDetail'>BENEFIT - Pore Wash Pop Up</p>
          <p className='downloadPDF' onClick={downloadPDF} style={{cursor: 'pointer' }}>download case study</p>
        </div>
        
        <div className='separatorSpatial'></div>
        <div className='infoContainerSpatialDetail'>
          <div>
            <p className='infoTitleSpatialDetail'>CLIENT</p>
            <p className='infoDataSpatialDetail'>Benefit Cosmetics</p>
          </div>

          <div>
            <p className='infoTitleSpatialDetail'>AGENCY</p>
            <p className='infoDataSpatialDetail'>POP UP MOB</p>
          </div>

          <div>
            <p className='infoTitleSpatialDetail'>LOCATION</p>
            <p className='infoDataSpatialDetail'>Covent Garden</p>
          </div>
        </div>
        <div className='infoSpatialDetailTextContainer'>
          <p>Building upon Benefit’s successful pop up in New York, which employed the same theme, 
            we had just a month to meticulously craft all the necessary elements and a mere five days 
            to bring the installation to life on site. With ingenuity and creativity at the forefront, 
            we fashioned a fully functional car wash setup complete with spinning brushes, 
          </p>
          <p>
            mesmerizing floating bubbles, and fuel pumps that playfully dispensed foam. 
            The result was an interactive and experiential journey that left a lasting impression on 
            all who engaged with it.
          </p>
        </div>
      </div>
      <div>
        <div className='spatialDetailImagesBoxBenefit1'>
          <LazyLoadImage src={image1} alt="benefit" className='' />
          <LazyLoadImage src={image2} alt="benefit" className='' />
          <LazyLoadImage src={image3} alt="benefit" className='' />
        </div>

        <LazyLoadImage src={image4} className="spatialDetailImageBenefit" />

        <div className='spatialDetailImagesBoxBenefit1'>
          <LazyLoadImage src={image5} alt="benefit" className='' />
          <LazyLoadImage src={image6} alt="benefit" className='' />
          <LazyLoadImage src={image7} alt="benefit" className='' />
        </div>

        <p className='spatialDetailImagesText'>Behind the scenes</p>
        <div className='spatialDetailImagesBenefit'>
          <LazyLoadImage src={image8} alt="benefit" className='spatialDetailBenefitImg blanc1' />
          <LazyLoadImage src={image9} alt="benefit" className='spatialDetailBenefitImg objPositionUnset blanc2'/>
        </div>
      </div>
    </div>
  )
}

export default Benefit