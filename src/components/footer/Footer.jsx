

// // import { Link } from "react-router-dom";

// // const Footer = () => {
// //   return (
// //     <footer className="bg-blue-600 text-white py-10 mt-20">
// //       <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">

// //         {/* Company Info */}
// //         <div>
// //           <h3 className="text-xl font-semibold mb-4">ApnaMart</h3>
// //           <p className="text-sm">Your one-stop shop for fashion, electronics, and more.</p>
// //         </div>

// //         {/* Categories */}
// //         <div>
// //           <h3 className="text-lg font-semibold mb-4">Categories</h3>
// //           <ul className="space-y-2 text-sm">
// //             <li><Link to="/allproduct">All Products</Link></li>
// //             <li><Link to="/">Fashion</Link></li>
// //             <li><Link to="/">Electronics</Link></li>
// //             <li><Link to="/">Home Appliances</Link></li>
// //           </ul>
// //         </div>

// //         {/* Support */}
// //         <div>
// //           <h3 className="text-lg font-semibold mb-4">Support</h3>
// //           <ul className="space-y-2 text-sm">
// //             <li><Link to="/contact">Contact Us</Link></li>
// //             <li><Link to="/">FAQ</Link></li>
// //             <li><Link to="/">Shipping</Link></li>
// //             <li><Link to="/">Returns</Link></li>
// //           </ul>
// //         </div>

// //         {/* Social Links */}
// //         <div>
// //           <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
// //           <ul className="space-y-2 text-sm">
// //             <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
// //             <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
// //             <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
// //           </ul>
// //         </div>

// //       </div>

// //       {/* Bottom text */}
// //       <div className="mt-8 text-center text-sm text-gray-300">
// //         © {new Date().getFullYear()} ApnaMart. All rights reserved.
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;


// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer
//       className="relative text-white py-10 mt-20"
//       style={{
//         backgroundImage: "url('https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1600&q=80')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Overlay for better text readability */}
//       <div className="absolute inset-0 bg-black bg-opacity-60"></div>

//       <div className="relative max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
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
//             <li><Link to="/">Fashion</Link></li>
//             <li><Link to="/">Electronics</Link></li>
//             <li><Link to="/">Home Appliances</Link></li>
//           </ul>
//         </div>

//         {/* Support */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Support</h3>
//           <ul className="space-y-2 text-sm">
//             <li><Link to="/contact">Contact Us</Link></li>
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
//       <div className="relative mt-8 text-center text-sm text-gray-300">
//         © {new Date().getFullYear()} ApnaMart. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Company Info with Logo */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
              alt="Logo"
              className="w-10 h-10"
            />
            <h3 className="text-2xl font-bold">ApnaMart</h3>
          </div>
          <p className="text-sm">
            Your one-stop shop for fashion, electronics, and more.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/allproduct">All Products</Link></li>
            <li><Link to="/">Fashion</Link></li>
            <li><Link to="/">Electronics</Link></li>
            <li><Link to="/">Home Appliances</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/">FAQ</Link></li>
            <li><Link to="/">Shipping</Link></li>
            <li><Link to="/">Returns</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom text */}
      <div className="mt-8 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} ApnaMart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
