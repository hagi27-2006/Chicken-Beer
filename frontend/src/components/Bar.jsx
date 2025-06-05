import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Custom marker icons
const userIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const branchIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

function Bar() {
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [mapCenter, setMapCenter] = useState([47.9184, 106.9177]);
  const [showMap, setShowMap] = useState(false);

  const branches = [
    {
      id: 1,
      name: 'Сүхбаатар дүүрэг',
      address: 'Сүхбаатар дүүрэг, 1-р хороо, Баянгол зах',
      phone: '7711-1111',
      hours: '09:00 - 22:00',
      location: [47.9184, 106.9177],
      features: ['Хүргэлт', 'Очиж авах', 'Суух газар'],
      rating: 4.5,
      reviews: 128
    },
    {
      id: 2,
      name: 'Хан-Уул дүүрэг',
      address: 'Хан-Уул дүүрэг, 1-р хороо, 3-р хороолол',
      phone: '7711-1112',
      hours: '09:00 - 22:00',
      location: [47.9084, 106.9077],
      features: ['Хүргэлт', 'Очиж авах'],
      rating: 4.3,
      reviews: 95
    },
    {
      id: 3,
      name: 'Баянзүрх дүүрэг',
      address: 'Баянзүрх дүүрэг, 1-р хороо, Нархан зах',
      phone: '7711-1113',
      hours: '09:00 - 22:00',
      location: [47.9284, 106.9277],
      features: ['Хүргэлт', 'Очиж авах', 'Суух газар', 'WiFi'],
      rating: 4.7,
      reviews: 156
    }
  ];

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
          setMapCenter([latitude, longitude]);
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-4">
            Манай салбарууд
          </h1>
          <p className="text-center text-lg opacity-90">
            Бид таны ойролцоо байрлаж байна
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Хайх..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600">
              <option value="">Бүх дүүрэг</option>
              <option value="sukhbaatar">Сүхбаатар дүүрэг</option>
              <option value="khan-uul">Хан-Уул дүүрэг</option>
              <option value="bayanzurkh">Баянзүрх дүүрэг</option>
            </select>
            <button
              onClick={() => setShowMap(!showMap)}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              {showMap ? 'Жагсаалт харах' : 'Газрын зураг харах'}
            </button>
          </div>
        </div>

        {showMap ? (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="h-[600px] w-full">
              <MapContainer
                center={mapCenter}
                zoom={13}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {userLocation && (
                  <Marker position={userLocation} icon={userIcon}>
                    <Popup>
                      <div className="text-center">
                        <p className="font-bold text-red-600">Таны байршил</p>
                      </div>
                    </Popup>
                  </Marker>
                )}
                {branches.map((branch) => (
                  <Marker
                    key={branch.id}
                    position={branch.location}
                    icon={branchIcon}
                    eventHandlers={{
                      click: () => setSelectedBranch(branch),
                    }}
                  >
                    <Popup>
                      <div className="p-2">
                        <h3 className="font-bold text-blue-600">{branch.name}</h3>
                        <p className="text-sm">{branch.address}</p>
                        <p className="text-sm">Утас: {branch.phone}</p>
                        <div className="mt-2 flex items-center">
                          <span className="text-yellow-500 mr-1">⭐</span>
                          <span className="text-sm">{branch.rating} ({branch.reviews})</span>
                        </div>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {branches.map((branch) => (
              <div
                key={branch.id}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() => setSelectedBranch(branch)}
              >
                <div className="h-48 bg-gray-200 relative">
                  <img
                    src={`https://static-maps.yandex.ru/1.x/?ll=${branch.location[1]},${branch.location[0]}&z=15&l=map&pt=${branch.location[1]},${branch.location[0]},pm2rdl`}
                    alt={branch.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-medium">
                    ⭐ {branch.rating} ({branch.reviews})
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {branch.name}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {branch.address}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {branch.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>Утас: {branch.phone}</span>
                    <span>{branch.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedBranch && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedBranch.name}
                </h2>
                <div className="flex items-center mt-1">
                  <span className="text-yellow-500 mr-1">⭐</span>
                  <span className="text-gray-600">
                    {selectedBranch.rating} ({selectedBranch.reviews} үнэлгээ)
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedBranch(null)}
                className="text-gray-500 hover:text-gray-700 p-2"
              >
                ✕
              </button>
            </div>
            <div className="h-64 bg-gray-200 mb-4 rounded-lg overflow-hidden">
              <img
                src={`https://static-maps.yandex.ru/1.x/?ll=${selectedBranch.location[1]},${selectedBranch.location[0]}&z=15&l=map&pt=${selectedBranch.location[1]},${selectedBranch.location[0]},pm2rdl`}
                alt={selectedBranch.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Хаяг</h3>
                <p className="text-gray-600">{selectedBranch.address}</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Холбоо барих</h3>
                <p className="text-gray-600">Утас: {selectedBranch.phone}</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Ажиллах цаг</h3>
                <p className="text-gray-600">{selectedBranch.hours}</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Үйлчилгээ</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedBranch.features.map((feature, index) => (
                    <span
                      key={index}
                      className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Bar; 