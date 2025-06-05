import { Link } from "react-router-dom";
<<<<<<< HEAD
import { useState } from "react";
import Login from "./Login";
=======
import logo from "../assets/logo.png";
>>>>>>> b18e40be8d947b1aecb36d38ea4dfe91b0bf1477

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);

  return (
<<<<<<< HEAD
    <>
      <nav className="bg-white h-2xl shadow-md w-full">
        <div className="max-w-xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-red-600">KFC</Link>
          <div className="space-x-6">
            <Link to="/menu" className="text-gray-700 hover:text-red-600">Меню</Link>
            <Link to="/bar" className="text-gray-700 hover:text-red-600">Салбар</Link>
            <Link to="/delivery" className="text-gray-700 hover:text-red-600">Захиалгын явц</Link>
            <button 
              onClick={() => setShowLogin(true)} 
              className="text-gray-700 hover:text-red-600"
            >
              Нэвтрэх
            </button>
          </div>
=======
    <nav className="font-manrope bg-[#F9F9F9] h-2xl shadow-md w-full">
      <div className="max-w-xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-14" />
        </Link>

        <div className="space-x-6">
          <Link to="/" className="text-gray-700 hover:text-red-600">
            Меню
          </Link>
          <Link to="/bar" className="text-gray-700 hover:text-red-600">
            Салбар
          </Link>
          <Link to="/delivery" className="text-gray-700 hover:text-red-600">
            Захиалгын явц
          </Link>
          <Link to="/login" className="text-gray-700 hover:text-red-600">
            Нэвтрэх
          </Link>
>>>>>>> b18e40be8d947b1aecb36d38ea4dfe91b0bf1477
        </div>
      </nav>
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </>
  );
}

export default Navbar;
