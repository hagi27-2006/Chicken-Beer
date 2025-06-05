import { Link } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);

  return (
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
        </div>
      </nav>
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </>
  );
}

export default Navbar;
