import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { IoStar } from "react-icons/io5";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { useRef } from "react";
import User from "../../assets/images/photo.png"

export default function UserReviews() {
  const swiperRef = useRef(null);

  const cards = [
    {
      name: "John Sakubva",
      rating: 5.0,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: User
    },
    {
      name: "Tinashe Muti",
      rating: 5.0,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: User
    },
    {
      name: "Kudakwashe Mbeva",
      rating: 5.0,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: User
    },
    {
      name: "John Sakubva",
      rating: 5.0,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: User
    },
    {
      name: "Tinashe Muti",
      rating: 5.0,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: User
    },
    {
      name: "Kudakwashe Mbeva",
      rating: 5.0,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: User
    },
  ];

  return (
    <div className="w-full h-auto bg-white py-8 px-4 md:px-8">
      <div className="flex w-full justify-between items-center mb-3">
        <div className="flex gap-3 items-baseline">
          <h1 className="text-4xl">User reviews</h1>
          <p className="text-[#FFCD82] text-2xl flex items-center">
            <IoStar />
            4.8
          </p>
        </div>
        <div className="flex gap-2">
          <div
            className="h-10 w-10 cursor-pointer bg-[#F5F5F5] rounded-full flex items-center justify-center"
            onClick={() => swiperRef.current.swiper.slidePrev()}
          >
            <FaArrowLeft />
          </div>
          <div
            className="h-10 w-10 cursor-pointer bg-[#F5F5F5] rounded-full flex items-center justify-center"
            onClick={() => swiperRef.current.swiper.slideNext()}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={false} // Disable built-in navigation
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="py-6 px-4 bg-[#F5F5F5] rounded-lg">
              <div className="flex mb-3 items-center w-full gap-2">
                <img
                  src={card.imageUrl}
                  alt={card.name}
                  className="rounded-full w-20 h-20 object-cover"
                />
                <div>
                  <h2 className="text-xl font-bold mb-2">{card.name}</h2>
                  <p className="text-yellow-500 mb-2">
                    {"⭐".repeat(Math.floor(card.rating))} ({card.rating})
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{card.comment}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
