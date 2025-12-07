import React from "react";
import bg from "../../../assets/image/HERO-COVER.jpg";
import bg1 from "../../../assets/image/Hero-2.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="relative container mx-auto px-2 md:px-0">
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className} swiper-pagination-bullet custom-bullet"></span>`;
          },
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="HeroSwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div>
            <div
              style={{ backgroundImage: `url(${bg})` }}
              className="h-[50vh] md:h-[70vh] rounded-md bg-cover bg-center my-4 md:my-10 relative"
            >
              {/* Content Overlay */}
              <div className="absolute top-1/2 left-4 md:left-[6%] -translate-y-1/2 max-w-[90%] md:max-w-2xl text-start flex flex-col gap-2 md:gap-4">
                
                {/* Subtitle: Adjusted size for MD */}
                <h3 className="cp text-lg md:text-xl lg:text-2xl font-semibold">
                  70% Off For This Winter
                </h3>
                
                {/* Title: Reduced size for MD (text-4xl), Large for LG (text-5xl) */}
                <h2 className="ct text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight md:leading-tight lg:leading-15">
                  Biggest Sale For Winter Man & Woman
                </h2>
                
                {/* Button: Increased margin-top (mt-5) to push it down on mobile */}
                <div className="mt-5 md:mt-8">
                    <Link to="/shop">
                    <button className="btn bgp text-white px-6 py-2 rounded shadow-md duration-300 transition-all hover:scale-105 font-semibold text-sm md:text-base">
                        Shop Now
                    </button>
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div>
            <div
              style={{ backgroundImage: `url(${bg1})` }}
              className="h-[50vh] md:h-[70vh] rounded-md bg-cover bg-center my-4 md:my-10 relative"
            >
              {/* Content Overlay */}
              <div className="absolute top-1/2 left-4 md:left-[6%] -translate-y-1/2 max-w-[90%] md:max-w-xl text-start flex flex-col gap-2 md:gap-4">
                
                <h3 className="cp text-lg md:text-xl lg:text-2xl font-semibold">
                  Starting at $<b>20.00</b>
                </h3>
                
                <h2 className="ct text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight md:leading-tight lg:leading-15">
                  Explore jackets sale for men's
                </h2>
                
                <div className="mt-5 md:mt-8">
                    <Link to="/shop">
                    <button className="btn bgp text-white px-6 py-2 rounded shadow-md duration-300 transition-all hover:scale-105 font-semibold text-sm md:text-base">
                        Shop Now
                    </button>
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;