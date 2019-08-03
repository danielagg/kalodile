import React from "react";

const MainListingSearch = () => {
  return (
    <form className="mt-2 p-4 bg-black text-center">
      <input
        className="my-2 p-2 bg-black text-white border-b border-white"
        type="text"
        name="itemName"
        placeholder="Search for gear..."
      />
      <input
        className="my-2 py-2 px-6 bg-white font-bold text-lg"
        type="submit"
        value="&rarr;"
      />
    </form>
  );
};

export default MainListingSearch;
