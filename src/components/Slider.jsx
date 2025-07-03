import slider_1 from "../assets/slider_1.jpg"
import slider_2 from "../assets/slider_2.jpg"
import slider_3 from "../assets/slider_3.jpg"

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation,Autoplay } from 'swiper/modules';

const Slider = () => {
  return (
    <>
     <Swiper  pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation,Autoplay]}
        loop={true}
        autoplay={{
            delay:2000,
        }}
        className="mySwiper">
        <SwiperSlide><img src={slider_1} className="h-[80vh] w-full bg-cover bg-no-repeat object-cover" alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider_2} className="h-[80vh] w-full bg-cover bg-no-repeat object-cover" alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider_3} className="h-[80vh] w-full bg-cover bg-no-repeat object-cover" alt="" /></SwiperSlide>
     </Swiper>
    </>
  );
};

export default Slider;
