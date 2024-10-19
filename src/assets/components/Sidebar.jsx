import React from "react";
import home from "../icons/home.svg";

const Navbar = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navbar */}
      <header className="bg-gray-100 w-full py-4 px-6 flex justify-between items-center fixed top-0 z-10 shadow-md">
        <div className="flex items-center">
          
          <h1 className="text-lg font-bold">Cuvette</h1>
        </div>
        <div className="flex items-center">
          <span className="mr-4">Contact</span>
          <div className="relative inline-block">
            <button className="flex items-center focus:outline-none border-[1px] border-gray-400 rounded-sm p-2">
              <span className="w-5 h-5 bg-gray-400 rounded-full"></span>
              <span className="ml-2 hidden md:inline">Your Name</span>
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg py-2 hidden">
              <a href="#" className="block px-4 py-2 text-gray-800">
                Profile
              </a>
              <a href="#" className="block px-4 py-2 text-gray-800">
                Settings
              </a>
              <a href="#" className="block px-4 py-2 text-gray-800">
                Logout
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar and Main Content */}
      <div className="flex mt-16">
        {/* Sidebar */}
        <aside className="w-10 md:w-16 border-r-[1px] h-full fixed top-16 left-0 p-4 mt-4">
          <nav>
            <ul>
              <li className="mb-4">
                <a href="#" className="flex items-center">
                    <img src={home} alt="" className="w-10"/>
                </a>
              </li>
              
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 ml-16 md:ml-16 absolute top-16 p-6">
          <div className="flex justify-start">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Create Interview
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Navbar;
