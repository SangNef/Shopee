import React, { useEffect, useState } from "react";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import Data from "../../data/saleData.json";
import { Link } from "react-router-dom";
import { AiOutlineDoubleRight } from "react-icons/ai"

const slides = [
  { url: require("../../assets/Home/homeBanner1.jpg") },
  { url: require("../../assets/Home/homeBanner2.jpg") },
  { url: require("../../assets/Home/homeBanner3.jpg") },
  { url: require("../../assets/Home/homeBanner4.jpg") },
];

const Home = () => {
  const [currenIndex, setCurrenIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currenIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currenIndex - 1;
    setCurrenIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currenIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currenIndex + 1;
    setCurrenIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrenIndex(slideIndex);
  };

  let intervalId;
  const startAutoNext = () => {
    intervalId = setInterval(() => {
      nextSlide();
    }, 3000);
  };
  const stopAutoNext = () => {
    clearInterval(intervalId);
  };

  useEffect(() => {
    startAutoNext();
    return () => {
      stopAutoNext();
    };
  });

  return (
    <>
      <BannerSlider
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        goToSlide={goToSlide}
        currenIndex={currenIndex}
      />
      <BannerSale />
    </>
  );
};

function BannerSlider({ prevSlide, nextSlide, goToSlide, currenIndex }) {
  return (
    <section className="max-w-[1400px] my-20 h-[780px] w-full mx-auto py-16 px-4 group">
      <div
        style={{
          backgroundImage: `url(${slides[currenIndex].url})`,
        }}
        className="relative w-full h-full rounded-2xl bg-center bg-cover duration-500"
      >
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <MdOutlineNavigateBefore onClick={prevSlide} size={30} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <MdOutlineNavigateNext onClick={nextSlide} size={30} />
        </div>
      </div>
      <ul className="flex -top-[10%] justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <li
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`h-3 rounded-full bg-black m-5 cursor-pointer duration-500 ${
              currenIndex === slideIndex ? "w-6" : "w-3"
            }`}
          ></li>
        ))}
      </ul>
    </section>
  );
}

function BannerSale() {

  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  return (
    <section className="max-w-[1400px] mx-auto font-KulimPark">
      <h2 className="text-center text-3xl font-bold">My Sale - Your Trust</h2>
      <div className="w-full bg-[#2E2E2E] text-white mt-10 rounded-xl p-5">
        <div>
          <h3 className="mb-5 font-bold text-xl">
            Black Sunday - Big Sale
            <span className="ml-10">
              <Link> -- More --</Link>
            </span>
          </h3>
          <div>
            <div>
              <p>{timerDays}</p>
              <small>Days</small>
            </div>
            <div>
              <p>{timerHours}</p>
              <small>Hours</small>
            </div>
            <div>
              <p>{timerMinutes}</p>
              <small>Minutes</small>
            </div>
            <div>
              <p>{timerSeconds}</p>
              <small>Seconds</small>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-6 gap-2">
          {Data.map((item) => (
            <div
              className="flex flex-col items-center text-center"
              key={item.id}
            >
              <div className="w-full h-full p-2 box-border border border-[#2E2E2E] bg-white flex items-center justify-center rounded-lg">
                <img
                  src={item.image}
                  alt="data"
                  className="max-w-full h-auto object-cover"
                />
              </div>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;

