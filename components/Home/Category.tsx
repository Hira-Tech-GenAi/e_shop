import React from "react";
import { getAllCategory } from "@/Request/request";

// Define the Category component
const Category = async () => {
  // Fetch all categories from the API
  const categories: string[] = await getAllCategory();

  // Log the fetched categories (for debugging purposes)
  console.log(categories);

  // Return JSX to render the categories
  return (
    <div className="pt-10 pb-12 ">
      <div className="w-4/5 mx-auto bg-yellow-300 p-4">
        <h1 className="text-center text-2xl font-bold font-inter capitalize">
          Shop By Category
        </h1>
      </div>

      {/* Define grid */}
      <div className="mt-12 w-4/5 mx-auto grid grid-cols-2 lg:grid-cols-4 xl-grid-cols-4 gap-8">
        {/* Map over the categories array and render a div for each category */}
        {categories.map((category) => (
          <div
            key={category}
            className="p-6 rounded cursor-pointer text-center hover:scale-110 transition-all duration-300 shadow-md bg-blue-600"
          >
            <h1 className="text-sm sm:text-base md:text-lg font-bold text-white font-inter capitalize">
              {category}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

// Export the Category component as the default export
export default Category;
