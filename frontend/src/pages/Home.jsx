import logo from "../assets/logo4.png";
import logo1 from "../assets/logo3.png";
import logo2 from "../assets/logo2.png";
import { useState, useEffect, useRef } from "react";
import Order from "../components/Order";
import Navbar from "../components/Navbar";

const Home = () => {
  const images = [logo2, logo1, logo];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [basketCount, setBasketCount] = useState(0);
  const orderRef = useRef(null);

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

  const handleOrderClick = () => {
    if (orderRef.current) {
      const yOffset = -80; // Adjust for fixed header if necessary
      const y =
        orderRef.current.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const updateBasketCount = (count) => {
    setBasketCount((prevCount) => prevCount + count); // Update basket count
  };

  return (
    <>
      <Navbar basketCount={basketCount} />
      <div className="relative w-full h-[657px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent z-10" />
        <img
          src={images[currentIndex]}
          alt="swipeable"
          className={`w-full h-full object-cover transform transition-transform duration-500 ease-in-out opacity-100 ${
            isAnimating
              ? "-translate-x-full opacity-0"
              : "translate-x-0 opacity-100"
          }`}
          key={currentIndex}
        />
        {!isAnimating && (
          <div className="absolute w-[500px] left-0 top-1/2 transform -translate-y-1/2 p-4 bg-opacity-50 text-white text-center flex-start z-20">
            <h2 className="text-7xl font-bold">Онлайн захиалга</h2>
            <p className="mt-4 text-xl">
              Амтат шарсан тахиагаа онлайнаар захиалаад амралтын өдрийг гэр
              бүлтэйгээ өнгөрүүлээрэй.
            </p>
            <button
              className="mt-6 px-4 py-2 bg-yellow-500 text-black rounded"
              onClick={handleOrderClick}
            >
              Захиалах
            </button>
          </div>
        )}
      </div>
      <div ref={orderRef} className="mt-10">
        <Order updateBasketCount={updateBasketCount} />
      </div>
    </>
  );
};

export default Home;
