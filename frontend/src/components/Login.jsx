import { useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../constants.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login({ onClose }) {
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });
  const [showResetPassword, setShowResetPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Store tokens and user info (you can use localStorage or sessionStorage)
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        localStorage.setItem("user", JSON.stringify(data.user));

        toast.success("Амжилттай нэвтэрлээ");
        onClose();
        window.location.reload(); 
      } else {
        toast.error(data.message || "Нууц үг эсвэл утасны дугаар буруу байна");
      }
    } catch (err) {
      toast.error("Сүлжээний алдаа: " + err.message);
    }
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Add reset password logic here
    console.log("Reset password for:", formData.phone);
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
        <ToastContainer position="top-center" autoClose={3000} />
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
                <label className="block text-gray-700 mb-2">
                  Утасны дугаар
                </label>
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
            <h2 className="text-2xl font-bold text-center mb-6">
              Нууц үг сэргээх
            </h2>
            <form onSubmit={handleResetPassword} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">
                  Утасны дугаар
                </label>
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
