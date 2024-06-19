// src/App.js

import React from 'react';
import CenteredContent from '../section7/section7';
import TestimonialSlider from '../section5/TestimonialSlider';
import Footerr from '../footer/footer';
import Footer from '../footer/footerrs';
// import Insights from '../section.6/Appp';

function Section() {
  return ( 
    <div className="Container">
      
      <TestimonialSlider/>
      <CenteredContent/>
      <Footerr/>
    <Footer/>
    </div>
  );
}

export default Section;
