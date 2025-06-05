import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login({ onClose }) {
  const [formData, setFormData] = useState({
    phone: '',
    password: ''
  });
  const [showResetPassword, setShowResetPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log('Login attempt:', formData);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Add reset password logic here
    console.log('Reset password for:', formData.phone);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        {!showResetPassword ? (
          <>
            <h2 className="text-2xl font-bold text-center mb-6">Нэвтрэх</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Утасны дугаар</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Утасны дугаар"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Нууц үг</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Нууц үг"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors"
              >
                Нэвтрэх
              </button>
            </form>
            <div className="mt-4 text-center space-y-2">
              <Link 
                to="/register"
                className="text-red-600 hover:text-red-700 block"
                onClick={onClose}
              >
                Бүртгүүлэх
              </Link>
              <button 
                onClick={() => setShowResetPassword(true)}
                className="text-gray-600 hover:text-gray-700"
              >
                Нууц үг сэргээх
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-center mb-6">Нууц үг сэргээх</h2>
            <form onSubmit={handleResetPassword} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Утасны дугаар</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Утасны дугаар"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors"
              >
                Илгээх
              </button>
            </form>
            <div className="mt-4 text-center">
              <button 
                onClick={() => setShowResetPassword(false)}
                className="text-gray-600 hover:text-gray-700"
              >
                Буцах
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login; 