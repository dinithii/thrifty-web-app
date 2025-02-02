/*import React from 'react';
import { ShoppingCart, CreditCard } from 'lucide-react';

const ProductGrid = ({ items }) => {
  if (!items || items.length === 0) {
    return (
      <div className="flex justify-center items-center h-48 text-gray-500">
        No items available in this category
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((item) => (
        <div 
          key={item.id} 
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
         
          <div className="aspect-square overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          
          <div className="p-4">
            
            <h3 className="font-semibold text-lg mb-2 line-clamp-2">
              {item.name}
            </h3>
            
            
            <p className="text-xl font-bold text-primary mb-4">
              ${item.price?.toFixed(2)}
            </p>
            
            <div className="grid grid-cols-2 gap-2">
              <button 
                onClick={() => item.onAddToCart?.(item)}
                className="flex items-center justify-center gap-2 bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors"
              >
                <ShoppingCart size={16} />
                Add to Cart
              </button>
              <button 
                onClick={() => item.onBuyNow?.(item)}
                className="flex items-center justify-center gap-2 border border-primary text-primary py-2 px-4 rounded-md hover:bg-primary hover:text-white transition-all"
              >
                <CreditCard size={16} />
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;*/

import React from 'react';
import { ShoppingCart, CreditCard } from 'react-feather';

const ProductGrid = () => {
  // Example data for visualization
  const sampleItems = [
    {
      id: 1,
      name: "Vintage Leather Jacket",
      price: 89.99,
      image: "/api/placeholder/400/400",
      onAddToCart: () => alert("Added to cart"),
      onBuyNow: () => alert("Buy now clicked")
    },
    {
      id: 2,
      name: "Classic Novel Collection",
      price: 24.99,
      image: "/api/placeholder/400/400",
      onAddToCart: () => alert("Added to cart"),
      onBuyNow: () => alert("Buy now clicked")
    },
    {
      id: 3,
      name: "Antique Coffee Table",
      price: 149.99,
      image: "/api/placeholder/400/400",
      onAddToCart: () => alert("Added to cart"),
      onBuyNow: () => alert("Buy now clicked")
    },
    {
      id: 4,
      name: "Retro Record Player",
      price: 199.99,
      image: "/api/placeholder/400/400",
      onAddToCart: () => alert("Added to cart"),
      onBuyNow: () => alert("Buy now clicked")
    },
    {
      id: 5,
      name: "Vintage Camera",
      price: 79.99,
      image: "/api/placeholder/400/400",
      onAddToCart: () => alert("Added to cart"),
      onBuyNow: () => alert("Buy now clicked")
    },
    {
      id: 6,
      name: "Classic Wristwatch",
      price: 129.99,
      image: "/api/placeholder/400/400",
      onAddToCart: () => alert("Added to cart"),
      onBuyNow: () => alert("Buy now clicked")
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Example Category Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Vintage Collection</h1>
          <p className="text-gray-600 mt-2">Discover our handpicked pre-loved treasures</p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sampleItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Content Container */}
              <div className="p-4">
                {/* Product Name */}
                <h3 className="font-semibold text-lg mb-2 text-gray-800 line-clamp-2">
                  {item.name}
                </h3>
                
                {/* Price */}
                <p className="text-xl font-bold text-primary mb-4">
                  ${item.price.toFixed(2)}
                </p>
                
                {/* Buttons Container */}
                <div className="grid grid-cols-2 gap-2">
                  <button 
                    onClick={item.onAddToCart}
                    className="flex items-center justify-center gap-2 bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors text-sm"
                  >
                    <ShoppingCart size={16} />
                    Add to Cart
                  </button>
                  <button 
                    onClick={item.onBuyNow}
                    className="flex items-center justify-center gap-2 border border-primary text-primary py-2 px-4 rounded-md hover:bg-primary hover:text-white transition-all text-sm"
                  >
                    <CreditCard size={16} />
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;