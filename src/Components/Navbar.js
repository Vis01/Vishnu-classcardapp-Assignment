import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white"> 
      <div className="flex space-x-4">
        <div className="flex justify-center items-center p-2 text-gray-500 hover:bg-slate-200 duration-300">Classes</div>
        <div className="flex justify-center items-center p-2 text-gray-500 hover:bg-slate-200 duration-300">One-on-one</div>
        <div className="flex justify-center items-center p-2 text-gray-500 hover:bg-slate-200 duration-300">Packages</div>
        <div className="flex justify-center items-center p-2 text-gray-500 hover:bg-slate-200 duration-300">Courses</div>
     </div>
    </div>
  );
};

export default Navbar;
