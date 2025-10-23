


// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-10 mt-20">
//       <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
//         {/* Company Info with Logo */}
//         <div>
//           <div className="flex items-center gap-2 mb-4">
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
//               alt="Logo"
//               className="w-10 h-10"
//             />
//             <h3 className="text-2xl font-bold">ApnaMart</h3>
//           </div>
//           <p className="text-sm">
//             Your one-stop shop for fashion, electronics, and more.
//           </p>
//         </div>

//         {/* Categories */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Categories</h3>
//           <ul className="space-y-2 text-sm">
//             <li><Link to="/allproduct">All Products</Link></li>
//             <li><Link to="/category/Shoes">Shoe</Link></li>
//             <li><Link to="/category/Books">Book</Link></li>
//             <li><Link to="/category/Laptop">Laptop</Link></li>
//           </ul>
//         </div>

//         {/* Support */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Support</h3>
//           <ul className="space-y-2 text-sm">
//             <li><Link to="/">Contact Us</Link></li>
//             <li><Link to="/">FAQ</Link></li>
//             <li><Link to="/">Shipping</Link></li>
//             <li><Link to="/">Returns</Link></li>
//           </ul>
//         </div>

//         {/* Social Links */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
//           <ul className="space-y-2 text-sm">
//             <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
//             <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
//             <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
//           </ul>
//         </div>
//       </div>

//       {/* Bottom text */}
//       <div className="mt-8 text-center text-sm text-gray-200">
//         © {new Date().getFullYear()} ApnaMart. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative text-white py-10 mt-20 overflow-hidden">

      {/* 🔹 Background Image with Blur Effect */}
      <img
    src="public/image/footerimg.jpg"
    alt="Footer Background"
    className="absolute inset-0 w-full h-full object-cover brightness-75"
  />

  {/* 🔹 Overlay (dark transparent layer) */}
  <div className="absolute inset-0 bg-black/70"></div>

      {/* 🔹 Content Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.2 6m0 0a1 1 0 102 0m-2 0h12.8a1 1 0 100-2H6.8m0 2L7 13"/>
</svg>

            <h3 className="text-2xl font-bold">ApnaMart</h3>
          </div>
          <p className="text-sm text-gray-200">
            Your one-stop shop for fashion, electronics, and more.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><Link to="/allproduct" className="hover:text-pink-400">All Products</Link></li>
            <li><Link to="/category/Shoes" className="hover:text-pink-400">Shoe</Link></li>
            <li><Link to="/category/Books" className="hover:text-pink-400">Book</Link></li>
            <li><Link to="/category/Laptop" className="hover:text-pink-400">Laptop</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><Link to="/" className="hover:text-pink-400">Contact Us</Link></li>
            <li><Link to="/" className="hover:text-pink-400">FAQ</Link></li>
            <li><Link to="/" className="hover:text-pink-400">Shipping</Link></li>
            <li><Link to="/" className="hover:text-pink-400">Returns</Link></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <ul className="flex flex-col sm:flex-row md:flex-row lg:flex-row gap-4 text-sm text-gray-200">
            
            <li className="flex items-center gap-2 hover:text-pink-400 transition">
              <Facebook className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
              <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            </li>

            <li className="flex items-center gap-2 hover:text-pink-400 transition">
              <Instagram className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
              <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            </li>

            <li className="flex items-center gap-2 hover:text-pink-400 transition">
              <Twitter className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
              <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
            </li>
          </ul>
        </div>
      </div>

      {/* 🔹 Bottom Text */}
      <div className="relative z-10 mt-8 text-center text-sm text-gray-300 border-t border-gray-600 pt-4">
        © {new Date().getFullYear()} ApnaMart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
