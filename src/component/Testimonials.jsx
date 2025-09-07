import React from "react";
import Title from "./Title";
import { testimonialsItems } from "../constant/data";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";

const Testimonials = () => {
  return (
    <section className="section">
      <div className="container">
        {/* title */}
        <Title
          title="Our Testimonials"
          text="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
          link="View All"
        ></Title>

        {/* card  wrapper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spacebetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1.5 },
            1280: { slidesPerView: 2.5 },
          }}
          loop={true}
          navigation={{
            nextEl: ".prev-btn",
            prevEl: ".next-btn",
          }}
          className="m t-14 lg:mt-16"
        >
          {testimonialsItems.map((item) => (
            // card
            <SwiperSlide
              key={item.id}
              className=" bg-white border border-white-95 p-8 lg:p-10 rounded-[10px] space-y-3"
            >
              <p>{item.text}</p>
              <div className="flex items-center justify-between flex-wrap pt-4 border-t border-t-orange-90 gap-4">
                {/*  image */}
                <div className="flex items-center gap-3">
                  <img
                    src={item.img}
                    alt={item.author}
                    width={50}
                    height={50}
                  />
                </div>
                {/* author */}
                <p className="font-medium">{item.author}</p>
              </div>
              <button className="secondary-btn">Read Full Story</button>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* navigation button */}
        <div className="flex items-center justify-center mt-18 gap-5">
          <button className="bg-orange-70 w-12 h-12 flex items-center justify-center rounded-xl hover:bg-orange-75 transition-colors active:bg-orange-75/80 prev-btn">
            <RiArrowLeftLine size={30} />
          </button>
          <button className="bg-orange-70 w-12 h-12 flex items-center justify-center rounded-xl hover:bg-orange-75 transition-colors active:bg-orange-75/80 next-btn">
            <RiArrowRightLine size={30} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
