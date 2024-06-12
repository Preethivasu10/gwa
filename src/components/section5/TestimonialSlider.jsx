import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './TestimonialSlider.css';
import { RiDoubleQuotesL } from "react-icons/ri";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";


const testimonials = [
  {
    image: 'https://s3-alpha-sig.figma.com/img/28af/dd33/ebe3b1c6f8e7984d687ee64c23e4e6fd?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T0z9ggjFzxb4o9YNryPPtf82-PMxrJ6pTCmpL4e4nikZ9gp4uk4supHhmetdjE2~JLY04pqhm0tfE8dNHcMLVDuXESugWYT8dbtI1~8KpkIP8Sa-FKlAf2ehAZCklg7uakGe4VYeoKCcCAgSQj5Fbom3T~cWU~sqSBuaPGwo5iHtRGU0vYKc-in05kM4oTW6pCq0MFIos37nK9qDMIDt2XtCFET905I4tzOkpVmsVaqk629EEu-4nD3ijmF0lpdHjetbNdQNDI4uTMBCbNzUpKVbnRGv-CCIepNUvN42qTquf41EFLyvAdjwdySdbE7bk8Jb9bxyvywdKSQLgiBFKQ__',
    text: 'Lorem ipsum dolor sit amet consectetur. Tortor molestie faucibus facilis fermentum. Varius orci pellentesque tortor consequat risus senectus aenean. Ullamcorper suspendisse nisl scelerisque vulputate cursus pharetra.',
    name: 'Lale T.',
    country: 'Turkey'
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/28af/dd33/ebe3b1c6f8e7984d687ee64c23e4e6fd?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T0z9ggjFzxb4o9YNryPPtf82-PMxrJ6pTCmpL4e4nikZ9gp4uk4supHhmetdjE2~JLY04pqhm0tfE8dNHcMLVDuXESugWYT8dbtI1~8KpkIP8Sa-FKlAf2ehAZCklg7uakGe4VYeoKCcCAgSQj5Fbom3T~cWU~sqSBuaPGwo5iHtRGU0vYKc-in05kM4oTW6pCq0MFIos37nK9qDMIDt2XtCFET905I4tzOkpVmsVaqk629EEu-4nD3ijmF0lpdHjetbNdQNDI4uTMBCbNzUpKVbnRGv-CCIepNUvN42qTquf41EFLyvAdjwdySdbE7bk8Jb9bxyvywdKSQLgiBFKQ__',
    text: 'Lorem ipsum dolor sit amet consectetur. Tortor molestie faucibus facilis fermentum. Varius orci pellentesque tortor consequat risus senectus aenean. Ullamcorper suspendisse nisl scelerisque vulputate cursus pharetra.',
    name: 'Lale T.',
    country: 'Turkey'
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/28af/dd33/ebe3b1c6f8e7984d687ee64c23e4e6fd?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T0z9ggjFzxb4o9YNryPPtf82-PMxrJ6pTCmpL4e4nikZ9gp4uk4supHhmetdjE2~JLY04pqhm0tfE8dNHcMLVDuXESugWYT8dbtI1~8KpkIP8Sa-FKlAf2ehAZCklg7uakGe4VYeoKCcCAgSQj5Fbom3T~cWU~sqSBuaPGwo5iHtRGU0vYKc-in05kM4oTW6pCq0MFIos37nK9qDMIDt2XtCFET905I4tzOkpVmsVaqk629EEu-4nD3ijmF0lpdHjetbNdQNDI4uTMBCbNzUpKVbnRGv-CCIepNUvN42qTquf41EFLyvAdjwdySdbE7bk8Jb9bxyvywdKSQLgiBFKQ__',
    text: 'Lorem ipsum dolor sit amet consectetur. Tortor molestie faucibus facilis fermentum. Varius orci pellentesque tortor consequat risus senectus aenean. Ullamcorper suspendisse nisl scelerisque vulputate cursus pharetra.',
    name: 'Lale T.',
    country: 'Turkey'
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/28af/dd33/ebe3b1c6f8e7984d687ee64c23e4e6fd?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T0z9ggjFzxb4o9YNryPPtf82-PMxrJ6pTCmpL4e4nikZ9gp4uk4supHhmetdjE2~JLY04pqhm0tfE8dNHcMLVDuXESugWYT8dbtI1~8KpkIP8Sa-FKlAf2ehAZCklg7uakGe4VYeoKCcCAgSQj5Fbom3T~cWU~sqSBuaPGwo5iHtRGU0vYKc-in05kM4oTW6pCq0MFIos37nK9qDMIDt2XtCFET905I4tzOkpVmsVaqk629EEu-4nD3ijmF0lpdHjetbNdQNDI4uTMBCbNzUpKVbnRGv-CCIepNUvN42qTquf41EFLyvAdjwdySdbE7bk8Jb9bxyvywdKSQLgiBFKQ__',
    text: 'Lorem ipsum dolor sit amet consectetur. Tortor molestie faucibus facilis fermentum. Varius orci pellentesque tortor consequat risus senectus aenean. Ullamcorper suspendisse nisl scelerisque vulputate cursus pharetra.',
    name: 'Lale T.',
    country: 'Turkey'
  },
];

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentSlide(index),
    prevArrow: <GrFormPrevious id='slider-previous-icon' />,
    nextArrow: <GrFormNext id='slider-next-icon' />,
  };

  return (
    <div className="testimonial-slider">
      <p className='loremipsum'>Lorem Ipsum</p>

      <h2 className="title-testimonial">Our Patients Love Us</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <div className="container">
              <div className="row">
                <div className="col-sm-4 col-md-4 col-lg-3">
                  <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                </div>
                <div className="col-sm-8 col-md-8 col-lg-9">
                  <div className="testimonial-content">
                  <RiDoubleQuotesL  className='RiDoubleQuotesLicon'/>
                  
                    <p className="testimonial-text">{testimonial.text}</p>
                    <p className="testimonial-name">{testimonial.name}</p>
                    <p className="testimonial-country">{testimonial.country}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
