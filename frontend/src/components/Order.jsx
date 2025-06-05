import React from "react";

const menu = [
  {
    title: "GARLIC CHICKENS",
    items: [
      {
        name: "Тендертэй багц",
        description: "5ш тахианы мах, 5ш тендэр мах, 1ш том коулсло",
        price: "18,500₮",
        image: "/random.png",
      },
      {
        name: "Андууд тендертэй багц",
        description: "5ш тахианы мах, 5ш тендэр мах, 1ш том коулсло",
        price: "36,000₮",
        image: "/random.png",
      },
      {
        name: "Арвин багц",
        description: "5ш тахианы мах, 5ш тендэр мах, 1ш том коулсло",
        price: "52,000₮",
        image: "/random.png",
      },
    ],
  },
  {
    title: "FRIED CHICKENS",
    items: [
      {
        name: "Тендертэй шарсан тахиа",
        description: "5ш шарсан тахианы мах",
        price: "20,000₮",
        image: "/random.png",
      },
      {
        name: "Шарсан тахианы багц",
        description: "10ш шарсан тахианы мах",
        price: "38,000₮",
        image: "/random.png",
      },
    ],
  },
  {
    title: "GOLD CHICKENS",
    items: [
      {
        name: "Алтан шарсан тахиа",
        description: "Алтан шарсан тахианы мах",
        price: "22,000₮",
        image: "/random.png",
      },
    ],
  },
  {
    title: "CHEESE CHICKENS",
    items: [
      {
        name: "Бяслагтай тахиа",
        description: "Тахианд зориулсан бяслаг",
        price: "25,000₮",
        image: "/random.png",
      },
    ],
  },
  {
    title: "YANGNYUM CHICKEN",
    items: [
      {
        name: "Яннүм тахиа",
        description: "Амтлаг яннүм тахианы мах",
        price: "24,000₮",
        image: "/random.png",
      },
    ],
  },
  {
    title: "SIDE MENU",
    items: [
      {
        name: "Коулсло",
        description: "Том хэмжээтэй коулсло",
        price: "5,000₮",
        image: "/random.png",
      },
    ],
  },
  {
    title: "BEVERAGES",
    items: [
      {
        name: "Кола",
        description: "Шар айраг",
        price: "3,000₮",
        image: "/random.png",
      },
    ],
  },
];

function Menu({ updateBasketCount }) {
  const handleAddToBasket = () => {
    updateBasketCount(1);
  };

  return (
    <div className="p-16">
      {menu.map((category, idx) => (
        <div key={idx} className="mb-12">
          <h1 className="text-3xl mb-6 ml-6 text-start">{category.title}</h1>
          <div className="grid md:grid-cols-3 gap-6">
            {category.items.map((item, index) => (
              <div
                key={index}
                className="group bg-[#F9F9F9] border overflow-hidden transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-80 object-cover"
                />
                <div className="p-4 transition-all duration-300">
                  <h2 className="text-md font-bold">{item.name}</h2>
                  <p className="text-red-600 font-semibold">{item.price}</p>

                  <div className="mt-2 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-300 overflow-hidden">
                    <p className="text-sm text-gray-600">{item.description}</p>
                    <button
                      className="w-full h-[40px] mt-2 px-3 py-1 bg-[#D81E1E] text-white text-sm font-bold rounded hover:bg-red-700"
                      onClick={handleAddToBasket}
                    >
                      Сагсанд хийх
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
