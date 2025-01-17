import React from "react";

const MainCategorySection = () => {
    const categories = [
        {id: 1, title: "BOOKS", imageUrl: "src/assets/images/books.png", link: "/BOOKS"},
        {id: 2, title: "CLOTHES", imageUrl: "src/assets/images/clothes.png", link: "/CLOTHES"},
        {id: 3, title: "FURNITURE", imageUrl: "src/assets/images/furniture.png", link: "/FURNITURE"},
        {id: 4, title: "TOOLS", imageUrl: "src/assets/images/tools.png", link: "/TOOLS"},
    ];

    return (
        <div className = "grid grid-cols-1 md:grid-cols-2 gap-10 p-20 w-100 h-100">
            {categories.map((category)=> (
                <a 
                    key={category.id}
                    href={category.link} 
                    className="relative group cursor-pointer overflow-hidden rounded-lg">

                    <img 
                        src={category.imageUrl} 
                        alt={category.title} 
                        className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105" />

                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 group-hover:bg-black/40">
                            <span className="text-white text-xl font-bold">
                            {category.title}
                        </span>
                    </div>

                </a>
            ))}

        </div>
    );
};

export default MainCategorySection;