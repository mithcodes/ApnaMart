

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Company Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">ApnaMart</h3>
          <p className="text-sm">Your one-stop shop for fashion, electronics, and more.</p>
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
      <div className="mt-8 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} ApnaMart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
