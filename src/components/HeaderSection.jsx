import React from "react";
import { Menu, LogOut } from 'react-feather';

const Header = () => {
    return (
        <header className="bg-primary px-4 py-3 flex items-center justify-between relative">
          <button 
          className="text-secondary hover:text-gray-700 transition-colors"
          aria-label="Menu"
          link="/Logout">
          <Menu size={24} />
        </button>
            
        <div className="flex items-center absolute left-1/2 -translate-x-1/2">
        <img 
                src="/src/assets/images/appIcon.png" 
                alt="App logo" 
                className="w-10 h-10"/>
            <h1 className="font-title text-white font-semibold ml-2">Thrifty shop</h1>
          </div> 

            <button 
            className="text-white hover:text-gray-700 transition-colors"
            aria-label="LogOut">
            <LogOut size={24} />
            </button>
        </header>
      );
    };

export default Header;