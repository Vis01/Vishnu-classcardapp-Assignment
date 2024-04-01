import React from "react";
import Card from "./Card";

const MYbookings = () => {
  const items = [
    {
      id:1,
      coursename: "Graphic design(full course)",
      subject: "Design for intermediates -L1",
      sessions: 10,
      Invoice: 13,
      Validtill: "Feb 15,2024(23 days left)",
      Balance: 6,
      Scheduled: 3,
      Attended: 5,
    },
  ];
  return (
    <div className="w-full h-full">
        <div className=" m-6 lg:m-12 shadow-slate-800">
        <h1 className="text-lg m-2">My bookings </h1>
      <div className="flex-col m-2">
        {items.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
        </div>
      
    </div>
  );
};

export default MYbookings;
