import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { X } from "lucide-react";

const HeroSection = () => {

   const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const isPopupClosed = localStorage.getItem("adminPopupClosed");
    if (!isPopupClosed) {
      setShowPopup(true);
    }
  }, []);

const handleClose = () => {
    setShowPopup(false);
    localStorage.setItem("adminPopupClosed", "true");
  };

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
      
      
      {showPopup && (
        <div className="absolute top-26 left-1/2 -translate-x-1/2 bg-yellow-50 border border-yellow-300 text-yellow-800 px-6 py-4 rounded-lg shadow-md z-20 flex items-start justify-between gap-4 w-[90%] md:max-w-xl animate-fade-in">
          <div className="text-sm md:text-base font-medium">
            <p>
              Please login as admin with email to see admin dashboard{" "}
              <strong>admin@gmail.com</strong> and password{" "}
              <strong>admin@gmail.com</strong>
            </p>
          </div>
          <button
            onClick={handleClose}
            className="text-yellow-800 font-bold text-xl hover:text-red-600"
          >
            &times;
          </button>
        </div>
      )}

      
      <Slider {...settings}>
        <div>
          <img src="/image/hero8.jpg" alt="Slide 1" className="w-full h-[50vh] md:h-[70vh] object-cover" />
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
          <img src="/image/hero6.jpg" alt="Slide 4" className="w-full h-[50vh] md:h-[70vh] object-cover" />
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
