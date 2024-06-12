// src/App.js

import React from 'react';
// import Appp from '../section.6/sections6';
import CenteredContent from '../section7/section7';
import TestimonialSlider from '../section5/TestimonialSlider';
import Footerr from '../footer/footer';
import Footer from '../footer/footerrs';

function Section() {
  return ( 
    <div className="Container">
      {/* <Appp/> */}
      <TestimonialSlider/>
      <CenteredContent/>
      <Footerr/>
    <Footer/>
    </div>
  );
}

export default Section;
