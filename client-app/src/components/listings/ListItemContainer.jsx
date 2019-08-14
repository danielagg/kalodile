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
    },
    {
      id: 3,
      name: "Boss DM-2W",
      pricePerDay: "$10",
      pricePerWeek: "$50",
      pricePerMonth: "$150",
      preferredPrice: "day",
      category: "Delay",
      subCategory1: "Analog"
    },
    {
      id: 4,
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
    <div className="flex flex-wrap justify-center lg:justify-between lg:w-3/4 my-6 lg:my-12 lg:mx-auto">
      {items.map(item => (
        <ListingItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ListItemContainer;
