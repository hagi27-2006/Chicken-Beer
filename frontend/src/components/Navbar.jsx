import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
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
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
