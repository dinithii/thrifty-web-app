import React from 'react';
import { Twitter, Facebook, Instagram, Mail, Phone, MapPin } from 'react-feather';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-3xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4 flex flex-col items-center">
            <div className="flex items-center gap-3">
              <img
                src="/src/assets/images/appIcon.png"
                alt="App logo"
                className="w-10 h-10"
              />
              <h3 className="text-lg font-bold">Thrifty</h3>
            </div>
            <p className="text-sm text-center">Pre loved treasures for sustainable lifestyle</p>
            <div className="flex gap-4">
              <a href="/twitter" className="hover:text-gray-700 transition-colors">
                <Twitter size={20}/>
              </a>
              <a href="/facebook" className="hover:text-gray-700 transition-colors">
                <Facebook size={20}/>
              </a>
              <a href="/instagram" className="hover:text-gray-700 transition-colors">
                <Instagram size={20}/>
              </a>
            </div>
          </div>

          <div className="space-y-4 flex flex-col items-center">
            <h3 className="text-lg font-bold">Information</h3>
            <ul className="space-y-2 text-center">
              <li><a href="/faq" className="hover:text-gray-700 transition-colors">FAQ</a></li>
              <li><a href="/privacyPolicy" className="hover:text-gray-700 transition-colors">Privacy Policy</a></li>
              <li><a href="/termsOfServices" className="hover:text-gray-700 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div className="space-y-4 flex flex-col items-center">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail size={16}/>
                <span>info@thrifty.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+(1) 11 060 1223</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>123 Queen St, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white">
          <p className="text-sm text-center">© {currentYear} Thrifty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;