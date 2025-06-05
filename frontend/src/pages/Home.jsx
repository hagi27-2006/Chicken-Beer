import logo from "../assets/fried.jpg";
import logo1 from "../assets/fried1.jpg";
import logo2 from "../assets/logo2.png";
import { useState, useEffect } from "react";

const Home = () => {
  const images = [logo2, logo1, logo];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[657px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent z-10" />
      <img
        src={images[currentIndex]}
        alt="swipeable"
        className={`w-full h-full object-cover transform transition-transform duration-500 ease-in-out ${
          isAnimating ? "-translate-x-full" : "translate-x-0"
        }`}
        key={currentIndex} // Force re-render on image change
      />
      {currentIndex === 0 && !isAnimating && (
        <div className="absolute w-[500px] left-0 top-1/2 transform -translate-y-1/2 p-4 bg-opacity-50 text-white text-center flex-start">
          <h2 className="text-7xl font-bold">Онлайн захиалга</h2>
          <p className="mt-4 text-xl">
            Амтат шарсан тахиагаа онлайнаар захиалаад амралтын өдрийг гэр
            бүлтэйгээ өнгөрүүлээрэй.
          </p>
          <button className="mt-6 px-4 py-2 bg-yellow-500 text-black rounded">
            Захиалах
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
