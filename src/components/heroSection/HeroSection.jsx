


// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // Custom Left Arrow
// const PrevArrow = ({ onClick }) => (
//   <div
//     onClick={onClick}
//     className="absolute top-1/2 left-4 -translate-y-1/2 z-20 w-12 h-12 bg-gray-200/50 dark:bg-gray-700/50 
//                rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 
//                transition-all duration-300 cursor-pointer"
//   >
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
//       strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-gray-600 dark:text-gray-300">
//       <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
//     </svg>
//   </div>
// );

// // Custom Right Arrow
// const NextArrow = ({ onClick }) => (
//   <div
//     onClick={onClick}
//     className="absolute top-1/2 right-4 -translate-y-1/2 z-20 w-12 h-12 bg-gray-200/50 dark:bg-gray-700/50 
//                rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 
//                transition-all duration-300 cursor-pointer"
//   >
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
//       strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-gray-600 dark:text-gray-300">
//       <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
//     </svg>
//   </div>
// );

// const HeroSection = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 1200,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     prevArrow: <PrevArrow />,
//     nextArrow: <NextArrow />,
//   };

//   const slides = [
//     {
//       title: "Turn Your House into a Home",
//       text: "Transform your living space into a cozy sanctuary with our curated collection of home essentials. From elegant décor to practical furnishings, find everything you need to create a space that reflects your style and feels truly yours. Start building your dream home today!",
//       img: "/image/1.png",
//     },
//     {
//       title: "Your Wardrobe, Reimagined",
//       text: "Discover a collection that blends timeless elegance with modern trends. From everyday essentials to statement pieces, we bring you styles that reflect your unique personality. Shop now and elevate your wardrobe with fashion designed to inspire confidence and redefine your look.",
//       img: "public/image/2.png",
//     },
//     {
//       title: "Smart Choices for Smart Living",
//       text: "Upgrade your lifestyle with cutting-edge gadgets and innovative solutions designed to simplify your everyday life. From smart home devices to the latest tech essentials, discover products that combine functionality with modern design. Start living smarter today!",
//       img: "/image/3.png",
//     },


//     {
//       title: "Smart Choices for Smart Living",
//       text: "Upgrade your lifestyle with cutting-edge gadgets and innovative solutions designed to simplify your everyday life. From smart home devices to the latest tech essentials, discover products that combine functionality with modern design. Start living smarter today!",
//       img: "/image/4.png",
//     },


//     {
//       title: "Smart Choices for Smart Living",
//       text: "Upgrade your lifestyle with cutting-edge gadgets and innovative solutions designed to simplify your everyday life. From smart home devices to the latest tech essentials, discover products that combine functionality with modern design. Start living smarter today!",
//       img: "/image/5.png",
//     },
//   ];

//   return (
//     <div className="relative overflow-hidden min-h-[450px] sm:min-h-[450px] bg-gray-100 dark:bg-gray-900 
//                     flex justify-center items-center dark:text-white transition-all duration-200">

//       {/* Decorative background */}
//       <div className="hidden sm:inline-block h-[600px] w-[600px] bg-[#FFDDA9] absolute -top-1/2 right-0 
//                       rounded-3xl rotate-45 -z-9"></div>
//       <div className="sm:hidden h-[500px] w-[500px] bg-[#FFDDA9] absolute -top-1/2 
//                       rounded-3xl rotate-45 -z-9"></div>

//       <div className="w-full pb-8 sm:pb-0">
//         <Slider {...settings}>
//           {slides.map((slide, index) => (
//             <div key={index}>
//               <div className="grid grid-cols-1 md:grid-cols-2 mx-10">

//                 {/* Text Content */}
//                 <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center 
//                                 md:text-left order-2 md:order-1 relative z-10">
//                   <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
//                     {slide.title}
//                   </h1>
//                   <p className="text-xs sm:text-sm dark:text-gray-300">{slide.text}</p>
//                   <div>
//                     <button className="bg-[#f42c37] text-white px-4 py-2 rounded-full 
//                                        hover:scale-105 transition-all duration-200 
//                                        dark:bg-[#ff6b6b]">
//                       Order now
//                     </button>
//                   </div>
//                 </div>

//                 {/* Image */}
//                 <div className="order-1 md:order-2">
//                   <div className="relative z-10">
//                     <img
//                       src={slide.img}
//                       alt="carousel-img"
//                       className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] object-contain mx-auto"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;


import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Left Arrow
const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute top-1/2 left-4 -translate-y-1/2 z-20 w-10 h-10 bg-gray-200/60 dark:bg-gray-700/60 
               rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 
               transition-all duration-300 cursor-pointer"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
      strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-700 dark:text-gray-200">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  </div>
);

// Custom Right Arrow
const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute top-1/2 right-4 -translate-y-1/2 z-20 w-10 h-10 bg-gray-200/60 dark:bg-gray-700/60 
               rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 
               transition-all duration-300 cursor-pointer"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
      strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-700 dark:text-gray-200">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  </div>
);

const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const slides = [
    {
      title: "Welcome to ApnaMart",
  text: "Your one-stop destination for everything you need — from mobiles, books, and laptops to shoes, clothes, and more. Shop smart, shop easy, and bring home the best with ApnaMart!",
      img: "/image/1.png",
    },
    {
      title: "Your Wardrobe, Reimagined",
      text: "Discover a collection that blends timeless elegance...",
      img: "/image/2.png",
    },
    {
      title: "Smart Choices for Smart Living",
      text: "Upgrade your lifestyle with cutting-edge gadgets...",
      img: "/image/3.png",
    },
    {
      title: "Modern Tech for Modern Living",
      text: "Explore products that simplify your everyday life...",
      img: "/image/4.png",
    },
    {
      title: "Style Meets Comfort",
      text: "Shop for home that keeps you happy and comfy...",
      img: "/image/5.png",
    },
  ];

  return (
    <div className="relative overflow-hidden min-h-[500px] sm:min-h-[500px] 
                    bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 
                    flex justify-center items-center text-white transition-all duration-200">

      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="w-full pb-8 sm:pb-0 relative z-10">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <div className="grid grid-cols-1 md:grid-cols-2 mx-8 gap-6">
                
                {/* Text Content */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center 
                                md:text-left order-2 md:order-1">
                  <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-sm sm:text-base text-gray-200">{slide.text}</p>
                  <div>
                    <button className="bg-[#f42c37] text-white px-5 py-2 rounded-full 
                                       hover:scale-105 transition-all duration-200 
                                       dark:bg-[#ff6b6b]">
                      Order now
                    </button>
                  </div>
                </div>

                {/* Image */}
                <div className="order-1 md:order-2 flex justify-center items-center">
                  <img
                    src={slide.img}
                    alt="carousel-img"
                    className="w-[180px] h-[180px] sm:h-[200px] sm:w-[200px] lg:w-[350px] lg:h-[350px] 
                               object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroSection;

