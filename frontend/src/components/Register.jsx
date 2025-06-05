import { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add registration logic here
    console.log('Register attempt:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link to="/" className="flex justify-center">
          <h2 className="text-3xl font-bold text-red-600">KFC</h2>
        </Link>
        <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">
          Бүртгүүлэх
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Нэр
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-600 focus:border-red-600"
                  placeholder="Нэр"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Утасны дугаар
              </label>
              <div className="mt-1">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-600 focus:border-red-600"
                  placeholder="Утасны дугаар"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                И-мэйл
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-600 focus:border-red-600"
                  placeholder="И-мэйл"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Нууц үг
              </label>
              <div className="mt-1">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-600 focus:border-red-600"
                  placeholder="Нууц үг"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Нууц үг давтаж хийх
              </label>
              <div className="mt-1">
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-600 focus:border-red-600"
                  placeholder="Нууц үг давтаж хийх"
                />
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="text-sm font-medium text-gray-900 mb-2">
                Та бүртгүүлснээр дараах боломжийг идлэх боломжтой юм:
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Онцгой урамшуулал, боломжуудыг аваарай</li>
                <li>Очиж авах эсвэл хүргэлтийн захиалгаа хялбарчлах</li>
              </ul>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
              >
                Бүртгүүлэх
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Эсвэл <Link to="/login" className="font-medium text-red-600 hover:text-red-500">Нэвтрэх</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register; 