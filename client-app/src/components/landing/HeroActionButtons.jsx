import React from "react";

const HeroActionButtons = () => {
  return (
    <div className="flex justify-between text-center">
      <p className="inline-block w-1/3 py-8 bg-blue-300 uppercase font-bold">
        All Listing
      </p>
      <p className="inline-block w-1/3 py-8 bg-blue-600 uppercase font-bold">
        Post Ad
      </p>
      <p className="inline-block w-1/3 py-8 bg-purple-500 uppercase font-bold">
        My Profile
      </p>
    </div>
  );
};

export default HeroActionButtons;
