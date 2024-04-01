import { FaRegHandPaper } from "react-icons/fa";
import { RiArrowLeftRightFill } from "react-icons/ri";
import { HiMiniChevronUpDown } from "react-icons/hi2";
import {
  LuMousePointerClick,
  LuBadgeDollarSign,
  LuFileSpreadsheet,
  LuFiles,
} from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";
import { GiProgression } from "react-icons/gi";

const SideBar = () => {
  return (
    <div className="flex-col   bg-blue-50   justify-center items-center m-3  mx-auto lg:w-2/3">
      <div className="w-full p-3">
        <div className="flex justify-between my-4">
          <img
            className="flex justify-center items-center h-10 w-10 rounded-full p-1"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />
          <div className="flex-col mx-1">
            <h3 className="text-lg"> Vishnu Jangid</h3>
            <h5 className="text-xs"> Vishnu.j8503@gmail.com</h5>
          </div>
          <div className="flex items-center text-2xl">
            <HiMiniChevronUpDown />
          </div>
        </div>
        <button className="m-3 w-full flex justify-center items-center bg-white border text-gray-600 hover:bg-slate-200 rounded-md">
          <RiArrowLeftRightFill />
          <h1> switch organization</h1>
        </button>
        <button className="m-3 w-full flex justify-center items-center bg-white border text-gray-600 hover:bg-slate-200 rounded-md">
          <FiEdit />
          <h1> Edit profile</h1>
        </button>
      </div>
      <ul className=" text-gray-600">
        <li className="flex rounded-lg hover:bg-gray-200 p-1">
          <div className="text-2xl mx-2">
            {" "}
            <CiCalendar />{" "}
          </div>
          <h1 className="text-lg ml-4">My calender</h1>
        </li>{" "}
        <li className="flex rounded-lg hover:bg-gray-200 p-1">
          <div className="text-2xl mx-2">
            {" "}
            <LuMousePointerClick />{" "}
          </div>
          <h1 className="text-lg ml-4">Mybookings</h1>
        </li>{" "}
        <li className="flex rounded-lg hover:bg-gray-200 p-1">
          <div className="text-2xl mx-2">
            {" "}
            <FaRegHandPaper />{" "}
          </div>
          <h1 className="text-lg ml-4">Attendance history</h1>
        </li>{" "}
        <li className="flex rounded-lg hover:bg-gray-200 p-1">
          <div className="text-2xl mx-2">
            <LuBadgeDollarSign />{" "}
          </div>
          <h1 className="text-lg ml-4">Billing history</h1>
        </li>{" "}
        <li className="flex rounded-lg hover:bg-gray-200 p-1">
          <div className="text-2xl mx-2">
            {" "}
            <LuFileSpreadsheet />{" "}
          </div>
          <h1 className="text-lg ml-4">My files</h1>
        </li>{" "}
        <li className="flex rounded-lg hover:bg-gray-200 p-1">
          <div className="text-2xl mx-2">
            {" "}
            <LuFiles />{" "}
          </div>
          <h1 className="text-lg ml-4">My courses</h1>
        </li>{" "}
        <li className="flex rounded-lg hover:bg-gray-200 p-1">
          <div className="text-2xl mx-2">
            {" "}
            <GiProgression />{" "}
          </div>
          <h1 className="text-base ml-4">Grades</h1>
        </li>
      </ul>
    </div>
  );
};
export default SideBar;
