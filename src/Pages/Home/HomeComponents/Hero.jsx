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
    <div className="relative container mx-auto">
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
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="HeroSwiper"
      >
        <SwiperSlide>
          <div>
            <div>
              <div
                style={{ backgroundImage: `url(${bg})` }}
                className="h-[70vh] rounded-md bg-cover bg-center my-10"
              >
                <div className="flex flex-col gap-4 justify-center text-start absolute top-[50%] left-[6%] -translate-y-[50%]">
                  <h3 className="cp text-2xl font-semibold ">
                    70% Off For This Winter
                  </h3>
                  <h2 className="ct text-5xl font-semibold w-xl leading-15">
                    Bigest Sale For Winter Man & Woman
                  </h2>
                  <Link to="/shop">
                    <button className="btn bgp text-center duration-300 transition-all hover:scale-105 text-gray-100 font-semibold">
                      Shop Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div>
              <div
                style={{ backgroundImage: `url(${bg1})` }}
                className="h-[70vh] rounded-md bg-cover bg-center my-10"
              >
                <div className="flex flex-col gap-4 justify-center text-start absolute top-[50%] left-[6%] -translate-y-[50%]">
                  <h3 className="cp text-2xl font-semibold">
                    Starting at $<b>20.00</b>
                  </h3>
                  <h2 className="ct text-5xl font-semibold w-md leading-15">
                    Explore jackets sale for men's
                  </h2>
                  <Link to="/shop">
                    <button className="btn bgp text-center duration-300 transition-all hover:scale-105 text-gray-100 font-semibold">
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
