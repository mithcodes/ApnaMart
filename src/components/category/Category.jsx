

import { useNavigate } from "react-router";

const category = [
  {
    image: 'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100',
    name: 'Fashion'
  },
  {
    image: 'https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100',
    name: 'Shirt'
  },
  {
    image: 'https://images.pexels.com/photos/6311609/pexels-photo-6311609.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100',
    name: 'Jacket'
  },
  {
    image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/l/u/-original-imah2fjd7wfd9ksh.jpeg?q=70',
    name: 'Mobile'
  },
  {
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=100',
    name: 'Laptop'
  },
  {
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100',
    name: 'Shoes'
  },
  {
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100',
    name: 'Home'
  },
  {
    image: 'https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100',
    name: 'Books'
  }
];

const Category = () => {
  const navigate = useNavigate();

  return (
    <div className="py-8 px-4 mt-2">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Shop by Category</h2>

      <div className="flex overflow-x-auto lg:justify-center hide-scroll-bar space-x-6 pb-2">
        {category.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(`/category/${item.name}`)}
            className="flex flex-col items-center cursor-pointer group transition-transform hover:scale-105"
          >
            <div className="w-20 h-20 lg:w-28 lg:h-28 rounded-full overflow-hidden shadow-md border-2 border-gray-200 group-hover:shadow-lg group-hover:border-blue-400 transition-all duration-300 ease-in-out bg-white">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="mt-2 text-sm lg:text-base font-medium text-gray-700 group-hover:text-blue-500 transition-colors">
              {item.name}
            </h1>
          </div>
        ))}
      </div>

      {/* Hide scrollbar */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .hide-scroll-bar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            .hide-scroll-bar::-webkit-scrollbar {
              display: none;
            }
          `
        }}
      />
    </div>
  );
};

export default Category;

