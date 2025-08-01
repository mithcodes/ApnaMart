

import { useContext, useState } from "react";
import myContext from "../../context/myContext";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const context = useContext(myContext);
  const { getAllProduct } = context;

  // Search State
  const [search, setSearch] = useState("");

  // Filter Search Data
  const filterSearchData = getAllProduct
    .filter((obj) => obj.title.toLowerCase().includes(search.toLowerCase()))
    .slice(0, 6);

  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center py-1">
      {/* Search Input */}
      <div className="relative w-full max-w-lg">
        <input
          type="text"
          placeholder="Search for products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-white/30 backdrop-blur-md text-gray-900 
                     rounded-full pl-12 pr-12 py-3 shadow-xl placeholder-gray-600
                     outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white/50
                     transition-all duration-300"
        />
        {/* Search Icon */}
        <svg
          className="absolute left-4 top-3.5 w-6 h-6 text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.15 6.15z"
          />
        </svg>
        {/* Clear Button */}
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-4 top-3.5 text-gray-500 hover:text-gray-800"
          >
            ✕
          </button>
        )}
      </div>

      {/* Dropdown Search Results */}
      {search && (
        <div className="absolute top-20 w-full max-w-lg bg-white shadow-2xl rounded-2xl overflow-hidden z-50">
          {filterSearchData.length > 0 ? (
            filterSearchData.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-100 transition-all"
                onClick={() => navigate(`/productinfo/${item.id}`)}
              >
                <img
                  className="w-12 h-12 rounded-lg object-cover border"
                  src={item.productImageUrl}
                  alt={item.title}
                />
                <span className="font-medium text-gray-700">{item.title}</span>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-6">
              <img
                className="w-16 mb-2 opacity-70"
                src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png"
                alt="Not Found"
              />
              <p className="text-gray-500 text-sm">No results found</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
