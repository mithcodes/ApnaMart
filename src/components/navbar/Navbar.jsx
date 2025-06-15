import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
      <li><Link to="/" onClick={onClick}>Home</Link></li>
      <li><Link to="/allproduct" onClick={onClick}>All Product</Link></li>

      {!user && (
        <>
          <li><Link to="/signup" onClick={onClick}>Signup</Link></li>
          <li><Link to="/login" onClick={onClick}>Login</Link></li>
        </>
      )}

      {user?.role === "user" && (
        <li><Link to="/user-dashboard" onClick={onClick}>User</Link></li>
      )}

      {user?.role === "admin" && (
        <li><Link to="/admin-dashboard" onClick={onClick}>Admin</Link></li>
      )}

      {user && (
        <li onClick={handleLogout} className="cursor-pointer">Logout</li>
      )}

      <li><Link to="/cart" onClick={onClick}>Cart({cartItems.length})</Link></li>
    </>
  );

  return (
    <>
      <nav className="fixed top-0 w-full bg-blue-600 text-white shadow-md z-[1000]">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">ApnaMart</Link>

          {/* Desktop Nav + Search */}
          <div className="hidden lg:flex items-center gap-8">
            <SearchBar
            /> 
            <ul className=" flex gap-6 font-medium list none">
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
        <div className="fixed top-16 right-0 w-2/3 h-full bg-blue-700 z-[999] shadow-lg p-6 transition-all duration-300 ease-in-out">
          <ul className="flex flex-col gap-5 text-white font-medium">
            <NavLinks onClick={() => setMenuOpen(false)} />
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
