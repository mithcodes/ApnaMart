import { useContext, useState } from "react";
import myContext from "../../context/myContext";
import { useNavigate } from "react-router-dom";


const SearchBar = () => {
    const context = useContext(myContext);
    const { getAllProduct } = context
    // Search State 
    const [search, setSearch] = useState("");

    // Filter Search Data
    // const filterSearchData = getAllProduct.filter((obj) => obj.title.toLowerCase().includes(search)).slice(0, 8)

const filterSearchData = getAllProduct
  .filter((obj) => obj.title.toLowerCase().includes(search.toLowerCase()))
  .slice(0, 8);

    const navigate = useNavigate();

    return (
        <div className="">
            {/* search input  */}
            {/* <div className="input flex justify-center">
                <input
                    type="text"
                    placeholder='Search here'
                    onChange={(e) => setSearch(e.target.value)}
                    className=' bg-gray-200 placeholder-gray-400 rounded-lg px-2 py-2 flex-1 lg:w-96 md:w-96 outline-none text-black '
                />
            </div> */}
<div className="flex justify-center items-center py-2">
  <div className="relative w-full max-w-md">
    <input
      type="text"
      placeholder="Search here"
      onChange={(e) => setSearch(e.target.value)}
      className="w-full bg-white text-gray-700 rounded-full px-5 py-2 shadow-lg placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
    />
    <svg
      className="absolute right-4 top-2.5 w-5 h-5 text-gray-500 pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.15 6.15z" />
    </svg>
  </div>
</div>



            {/* search drop-down  */}
            <div className=" flex justify-center">
                {search && <div className="block absolute bg-gray-200 text-black w-96 md:w-96 lg:w-96 z-50 my-1 rounded-lg px-2 py-2">
                    {filterSearchData.length > 0 ?
                        <>
                            {filterSearchData.map((item, index) => {
                                return (
                                    <div key={index} className="py-2 px-2 cursor-pointer" 
                                    onClick={() => navigate(`/productinfo/${item.id}`)}>
                                        <div className="flex items-center gap-2">
                                            <img className="w-10" src={item.productImageUrl} alt="" />
                                            {item.title}
                                        </div>
                                    </div>
                                )
                            })}
                        </>
                        :
                        <>
                            <div className="flex justify-center">
                                <img className=" w-20" src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png" alt="img" />
                            </div>
                        </>}
                </div>
                }
            </div>
        </div>
    );
}

export default SearchBar;