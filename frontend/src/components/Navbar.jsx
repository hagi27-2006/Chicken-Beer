import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md w-full">
      <div className="max-w-8xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-red-600">KFC</Link>
        <div className="space-x-6">
          <Link to="/menu" className="text-gray-700 hover:text-red-600">Меню</Link>
          <Link to="/bar" className="text-gray-700 hover:text-red-600">Салбар</Link>
          <Link to="/delivery" className="text-gray-700 hover:text-red-600">Захиалгын явц</Link>
          <Link to="/login" className="text-gray-700 hover:text-red-600">Нэвтрэх</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
