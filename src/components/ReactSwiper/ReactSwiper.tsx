// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./styles.css";
import { Dispatch, SetStateAction } from "react";

interface ReactSwiperProps {
  data: { text: string; id: number }[];
  id: number;
  setId: Dispatch<SetStateAction<number>>;
}

const ReactSwiper = ({ data, id, setId }: ReactSwiperProps) => {
  return (
    <>
      <Swiper className="mySwiper px-5" spaceBetween={30} slidesPerView={5}>
        {data.map((e) => (
          <SwiperSlide
            onClick={() => setId(e.id)}
            className={`gap-5 p-3 !w-fit cursor-pointer ${
              id === e.id ? "text-third font-semibold" : ""
            }`}
          >
            {e.text} <p className="text-primary font-bold text-2xl mb-1">|</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ReactSwiper;
