import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
import Login from "./Login";
import basket from "../assets/basket.png";

function Navbar({ basketCount }) {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <nav className="font-manrope bg-[#F9F9F9] h-2xl shadow-md w-full">
        <div className="max-w-2xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-14" />
          </Link>

          <div className="space-x-6 flex items-center">
            <Link to="/" className="text-gray-700 hover:text-[#D81E1E]">
              Меню
            </Link>
            <Link to="/bar" className="text-gray-700 hover:text-[#D81E1E]">
              Салбар
            </Link>
            <Link to="/delivery" className="text-gray-700 hover:text-[#D81E1E]">
              Захиалгын явц
            </Link>

            <button
              onClick={() => setShowLogin(true)}
              className="text-gray-700 hover:text-red-600"
            >
              Нэвтрэх
            </button>

            <div className="relative">
    
              <img src={basket} alt="Basket" className="h-8" />
              {basketCount > 0 && (
                <span className="absolute top-0 right-0 bg-[#D81E1E] text-white text-xs rounded-full px-1">
                  {basketCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </nav>
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </>
  );
}

export default Navbar;
