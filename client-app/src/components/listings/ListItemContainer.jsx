import React from "react";

// Components
import ListingItem from "./ListingItem";

const ListItemContainer = props => {
  // todo: fetch from API, store in redux
  const items = [
    {
      id: 1,
      name: "Boss DM-2W",
      pricePerDay: "$10",
      pricePerWeek: "$50",
      pricePerMonth: "$150",
      preferredPrice: "day",
      category: "Delay",
      subCategory1: "Analog"
    },
    {
      id: 2,
      name: "Boss DM-2W",
      pricePerDay: "$10",
      pricePerWeek: "$50",
      pricePerMonth: "$150",
      preferredPrice: "day",
      category: "Delay",
      subCategory1: "Analog"
    }
  ];

  return (
    <div className="flex m-6">
      {items.map(item => (
        <ListingItem className="w-1/2 m-6" item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ListItemContainer;
