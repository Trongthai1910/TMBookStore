import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const Banner = () => {
  return (
    <div className="group mt-5 relative w-full max-w-[1000px] mx-auto rounded-xl overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".nextBtn",
          prevEl: ".prevBtn",
        }}
        autoplay={{ delay: 2000 }}
        loop={true}
      >
        <SwiperSlide>
          <img
            src="/imgs/banner1.jpg"
            className="w-full h-[350px] object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/imgs/banner2.jpg"
            className="w-full h-[350px] object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/imgs/banner3.jpg"
            className="w-full h-[350px] object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/imgs/banner4.jpg"
            className="w-full h-[350px] object-cover"
          />
        </SwiperSlide>
      </Swiper>

      <button className="prevBtn z-10 opacity-0 group-hover:opacity-100 absolute top-1/2 left-3 -translate-y-1/2 bg-white/60 hover:bg-white shadow-md backdrop-blur-md px-2 py-2 rounded-full transition">
        <ChevronLeft />
      </button>

      <button className="nextBtn z-10 opacity-0 group-hover:opacity-100 absolute top-1/2 right-3 -translate-y-1/2 bg-white/60 hover:bg-white shadow-md backdrop-blur-md px-2 py-2 rounded-full transition">
        <ChevronRight />
      </button>
    </div>
  );
};

export default Banner;
