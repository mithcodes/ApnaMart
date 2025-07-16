import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

const HeroSection = () => {
  const settings = {
    dots: true,              // dots below slider
    infinite: true,          // infinite scroll
    speed: 500,              // transition speed
    slidesToShow: 1,         // show one slide at a time
    slidesToScroll: 1,       
    autoplay: true,          // auto slide
    autoplaySpeed: 3000,     // 3 seconds
  };
  return (


<div className="w-full  mx-auto mt-22 md:mt-22 overflow-x-hidden overflow-y-hidden ">
      <Slider {...settings}>
        <div>
          <img src="/image/hero8.jpg" alt="Slide 1" className="w-full h-[50vh] md:h-[50vh] object-cover" />
        </div>

     <div>
          <img src="/image/hero9.jpg" alt="Slide 2" className="w-full h-[50vh] md:h-[70vh] object-cover" />
        </div>
        <div>
          <img src="/image/hero10.jpg" alt="Slide 3" className="w-full h-[50vh] md:h-[70vh] object-cover" />
        </div>
        <div>
          <img src="/image/hero11.jpg" alt="Slide 4" className="w-full h-[50vh] md:h-[70vh] object-cover" />
        </div>
         <div>
          <img src="public/image/hero5.jpg" alt="Slide 4" className="w-full h-[50vh] md:h-[70vh] object-cover" />
        </div>
      </Slider>
    </div>
    // <div className="w-full h-[60vh] md:h-[60vh]">
    //   <img
    //     className="w-full h-full   object-cover"
    //     src="https://as1.ftcdn.net/v2/jpg/11/90/52/88/1000_F_1190528810_TBVoSVOSKuSa0xEhYyUcCeWBgK2bh3e9.jpg"
    //     alt="Hero Image"
    //   />
    // </div>
  );
};

export default HeroSection;
