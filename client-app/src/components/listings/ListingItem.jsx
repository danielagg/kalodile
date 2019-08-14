import React from "react";

const ListingItem = () => {
  return (
    <div className="w-2/5 lg:w-1/4 p-2 lg:p-4 bg-gray-200 mx-2 my-4 lg:m-2">
      <span className="relative">
        <img
          src="https://images.unsplash.com/photo-1511203438670-49f8ea8441c6"
          alt="Product to rent"
        />
        <h3 className="absolute bottom-0 mt-6">$10/day</h3>
      </span>

      <h3>Boss DM-2W</h3>
      <p>Analog delay</p>
      <a href="#">View More</a>
    </div>
  );
};

export default ListingItem;
