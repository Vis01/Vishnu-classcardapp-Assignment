import React from "react";
import { MdDownload } from "react-icons/md";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdContentPaste } from "react-icons/md";
import { AiTwotoneClockCircle } from "react-icons/ai";
import { MdOutlineCheckBox } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const {coursename,subject,sessions, Invoice, Validtill, Balance,Scheduled,Attended } = item;
  return (
    <div className="flex w-full  bg-white rounded-md ">
      <div className="flex justify-center p-2 mb-auto ">
        <h2 className="flex justify-center items-center h-12 w-12 bg-blue-50  text-2xl rounded-md">
        <MdContentPaste/>
        </h2>
      </div>
      <div className="w-full">
        <div className="flex justify-between p-2">
          <h1 className="text-lg font-bold">{coursename}</h1>
          <div className="flex">
            <button className="flex justify-center items-center border border-zinc-400 rounded-lg px-2 mx-1"> <MdDownload /> <h3 className="px-1"> Invoice PDF</h3> </button>
            <button className="flex justify-center items-center border border-zinc-400 rounded-lg px-2 mx-1"> <MdDownload /> <h3 className="px-1"> Receipt PDF</h3> </button>      
          </div>
        </div>
        <div className="flex p-2">
          <div className="flex-col px-2">
            <h2 className="text-gray-300"> Subject</h2>
            <h2 className="text-black">{subject}</h2>
          </div>
          <div className="flex-col px-2">
            <h2 className="text-gray-300"> Sessions</h2>
            <h2 className="text-black">{sessions}</h2>
          </div>
          <div className="flex-col px-2">
            <h2 className="text-gray-300"> Invoice</h2>
            <h2 className="text-black">{Invoice}</h2>
          </div>
          <div className="flex-col px-2">
            <h2 className="text-gray-300">Valid till </h2>
            <h2 className="text-black">{Validtill}</h2>
          </div>    
        </div>
        <div className="bg-blue-50 m-3 rounded-lg p-2" >
          <div className="m-2">
          <h1>Balances {Balance}</h1>
          <div className="flex"> {Array.from({ length: Balance }, (_, index) => (
        <MdOutlineCheckBoxOutlineBlank key={index} className="bg-white mx-1" />
          ))}</div>
         
          </div>
          <div className="m-2">
          <h1>Scheduled {Scheduled}</h1>
          <div className="flex"> {Array.from({ length: Scheduled }, (_, index) => (
        <AiTwotoneClockCircle  key={index} className="bg-white mx-1" />
          ))}</div>
         
          </div>
          <div className="m-2">
          <h1 className="text-green-600">Attended {Attended}</h1>
          <div className="flex"> {Array.from({ length: Attended }, (_, index) => (
        <MdOutlineCheckBox key={index} className="bg-green-200 mx-1" />
          ))}</div>
         
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Card;
