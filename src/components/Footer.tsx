
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-pink-500 text-white pt-12 pb-6">
      <div className="container">
        {/* Footer top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">LOGO</h3>
            <p className="text-sm mb-4">
              Your trusted online store since 2023
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Electronics</a></li>
              <li><a href="#" className="hover:underline">Clothing</a></li>
              <li><a href="#" className="hover:underline">Home & Kitchen</a></li>
              <li><a href="#" className="hover:underline">Beauty & Health</a></li>
              <li><a href="#" className="hover:underline">Sports & Outdoors</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li>123 Main Street, City, Country</li>
              <li>Phone: 7777-8984</li>
              <li>Email: info@example.com</li>
              <li className="pt-2">
                <a href="#" className="bg-white text-pink-500 px-4 py-2 rounded-md inline-block hover:bg-opacity-90 transition-all">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Footer bottom */}
        <div className="pt-8 mt-8 border-t border-white border-opacity-20 text-sm text-center">
          <p>© 2023 All rights reserved | Designed with love</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
