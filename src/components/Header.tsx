
import React from 'react';
import { Search, ShoppingCart, User, Heart, Menu } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const Header = () => {
  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="w-full bg-pink-500 text-white py-1 px-4">
        <div className="container flex justify-between items-center text-sm">
          <span>Welcome to our store</span>
          <div className="flex items-center space-x-4">
            <span>Contact: 7777-8984</span>
            <div className="flex items-center space-x-2">
              <a href="#" className="hover:text-pink-100">Login</a>
              <span>|</span>
              <a href="#" className="hover:text-pink-100">Register</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main header */}
      <div className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-pink-500">
            LOGO
          </a>
          
          {/* Search */}
          <div className="flex-1 max-w-xl mx-8">
            <div className="relative flex items-center">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center h-10 px-4 border border-r-0 border-gray-200 rounded-l-md bg-gray-50 text-sm focus:outline-none">
                  <span>All Categories</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Category 1</DropdownMenuItem>
                  <DropdownMenuItem>Category 2</DropdownMenuItem>
                  <DropdownMenuItem>Category 3</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Input 
                type="search" 
                placeholder="Search for products..." 
                className="flex-1 h-10 rounded-none border-l-0 border-r-0"
              />
              <Button size="icon" className="h-10 rounded-l-none bg-pink-500 hover:bg-pink-600">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-700 hover:text-pink-500 transition-colors">
              <Heart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 text-xs bg-pink-500 text-white rounded-full">0</span>
            </button>
            <button className="relative p-2 text-gray-700 hover:text-pink-500 transition-colors">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 text-xs bg-pink-500 text-white rounded-full">0</span>
            </button>
            <button className="p-2 text-gray-700 hover:text-pink-500 transition-colors">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="border-t border-b border-gray-200">
        <div className="container">
          <ul className="flex">
            <li>
              <a href="#" className="flex items-center py-3 px-4 text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors">
                <Menu className="mr-2 h-4 w-4" />
                Categories
              </a>
            </li>
            <li>
              <a href="#" className="block py-3 px-4 text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block py-3 px-4 text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="block py-3 px-4 text-sm font-medium text-pink-500 border-b-2 border-pink-500">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="block py-3 px-4 text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
