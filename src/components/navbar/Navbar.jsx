import { useState } from "react";
import {NavLink, Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBar from "../searchBar/SearchBar";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart);
  const user = JSON.parse(localStorage.getItem("users"));

  const handleLogout = () => {
    localStorage.clear("users");
    navigate("/login");
  };

   
  const NavLinks = ({ onClick }) => (
  <>
    <li>
      <NavLink
        to="/"
        onClick={onClick}
        className={({ isActive }) =>
          isActive ? "text-blue-900 font-bold underline" : "hover:text-yellow-900"
        }
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/allproduct"
        onClick={onClick}
        className={({ isActive }) =>
          isActive ? "text-blue-900 font-bold underline" : "hover:text-yellow-900"
        }
      >
        All Product
      </NavLink>
    </li>

    {!user && (
      <>
        <li>
          <NavLink
            to="/signup"
            onClick={onClick}
            className={({ isActive }) =>
             isActive ? "text-blue-900 font-bold underline" : "hover:text-yellow-900"
            }
          >
            Signup
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            onClick={onClick}
            className={({ isActive }) =>
              isActive ? "text-blue-900 font-bold underline" : "hover:text-yellow-900"
            }
          >
            Login
          </NavLink>
        </li>
      </>
    )}

    {user?.role === "user" && (
      <li>
        <NavLink
          to="/user-dashboard"
          onClick={onClick}
          className={({ isActive }) =>
            isActive ? "text-blue-900 font-bold underline" : "hover:text-yellow-900"
          }
        >
          User
        </NavLink>
      </li>
    )}

    {user?.role === "admin" && (
      <li>
        <NavLink
          to="/admin-dashboard"
          onClick={onClick}
          className={({ isActive }) =>
            isActive ? "text-blue-900 font-bold underline" : "hover:text-yellow-900"
          }
        >
          Admin
        </NavLink>
      </li>
    )}

    {user && (
      <li
        onClick={handleLogout}
        className="cursor-pointer hover:text-yellow-100"
      >
        Logout
      </li>
    )}

    <li>
      <NavLink
        to="/cart"
        onClick={onClick}
        className={({ isActive }) =>
          isActive ? "text-blue-900 font-bold underline" : "hover:text-yellow-900"
        }
      >
        Cart({cartItems.length})
      </NavLink>
    </li>
  </>
);

  return (
    <>
      <nav className="fixed top-0 w-full  backdrop-blur-2xl shadow-lg z-[1000]">
  <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
    
    {/* Logo */}
    <Link 
      to="/" 
      className="text-xl md:text-3xl font-extrabold tracking-wide 
                 text-black bg-clip-text drop-shadow-lg">
      ApnaMart
    </Link>

          {/* Desktop Nav + Search */}
          {/* <div className="hidden lg:flex items-center gap-8">
            <SearchBar
            /> 
            <ul className=" flex gap-6 font-medium list none">
            <NavLinks />
            </ul>




            
          </div> */}



          <div className="hidden lg:flex items-center gap-8">
      <SearchBar /> 
      <ul className="flex gap-6 font-medium list-none">
        <NavLinks />
      </ul>
    </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <SearchBar />
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="fixed top-16 right-0 w-3/4 h-full bg-white/10 backdrop-blur-md shadow-lg z-[999] p-6 transition-all duration-300 ease-in-out">
          <ul className="flex flex-col gap-5 text-black font-medium">
            <NavLinks onClick={() => setMenuOpen(false)} />
          </ul>
        </div>
      )}

      <div className="h-5"></div>
    </>
  );
};

export default Navbar;