import React, { useState } from "react";
import { FaShoppingBag, FaTasks, FaUserFriends, FaList, FaProductHunt, FaBars } from "react-icons/fa";

const SideBar = () => {

    const [active, setActive] = useState(false);
    console.log(active)
  return (
    <div className=" flex">
    
      <aside id="sidebar" className={ active ? "hidden" :"bg-slate-700 z-10 top-0 text-white fixed h-full p-5 w-72"}>
      <div className="sidebar-title border-b mb-4 py-4 flex justify-between items-center">
        <div className="sidebar-brand flex items-center gap-2">
          <FaShoppingBag className="icon_header" /> SHOP
        </div>
        
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item flex items-center gap-2 mb-7 border-b py-2 border-dashed cursor-pointer">
          <FaTasks className="icon" /> Dashboard
        </li>
        <li className="sidebar-list-flex flex items-center gap-2 mb-7 border-b py-2 border-dashed cursor-pointer"><FaProductHunt /> Products</li>
        <li className="sidebar-list-item flex items-center gap-2 mb-7 border-b py-2 border-dashed cursor-pointer"><FaList /> Categories</li>
        <li className="sidebar-list-item flex items-center gap-2 mb-7 border-b py-2 border-dashed cursor-pointer"><FaUserFriends /> Customers</li>
        <li className="sidebar-list-item flex items-center gap-2 mb-7 border-b py-2 border-dashed cursor-pointer">Inventory</li>
      </ul>
    </aside>
    <button className=" absolute -left-1 rounded-full z-30 top-4    text-green-400 px-4 py-3 " onClick={() => setActive(prev => !prev)}>
            <FaBars className=" " />
        </button>
    </div>
    
    
  );
};

export default SideBar;
