import React from "react";
import logo from "../icons/logo.svg";
import home from "../icons/home.svg";

const JobListing = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navbar */}
      <header className="bg-gray-100 w-full py-4 px-6 flex justify-between items-center fixed top-0 z-10 shadow-md">
        <div className="flex items-center">
          
          <img src={logo} alt="" />
        </div>
        <div className="flex items-center">
          <span className="mr-4">Contact</span>
          <div className="relative inline-block">
          <button className="flex items-center focus:outline-none border-[1px] border-gray-400 rounded-sm p-2">
              <span className="w-5 h-5 bg-gray-400 rounded-full"></span>
              <span className="ml-2 hidden md:inline">Your Name</span>
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar and Form Content */}
      <div className="flex mt-16">
        {/* Sidebar */}
        <aside className="w-16 md:w-16 border-r-2 h-full fixed top-16 left-0 p-4">
          <nav>
            <ul>
              <li className="mb-4">
                <a href="#" className="flex items-center">
                  <img src={home} alt="" />
                  
                </a>
              </li>
              {/* Add more sidebar items if needed */}
            </ul>
          </nav>
        </aside>

        {/* Form Content */}
        <main className="flex-1 ml-16 md:ml-48 p-6">
          <form className="bg-white p-6 rounded shadow-md max-w-lg mx-auto">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jobTitle">
                Job Title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="jobTitle"
                type="text"
                placeholder="Enter Job Title"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jobDescription">
                Job Description
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="jobDescription"
                placeholder="Enter Job Description"
                rows="4"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="experienceLevel">
                Experience Level
              </label>
              <select
                className="block appearance-none w-full bg-white border border-gray-300 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
                id="experienceLevel"
              >
                <option>Select Experience Level</option>
                <option>Entry Level</option>
                <option>Mid Level</option>
                <option>Senior Level</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="addCandidate">
                Add Candidate
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="addCandidate"
                type="email"
                placeholder="xyz@gmail.com"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">
                End Date
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="endDate"
                type="date"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 float-right px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Send
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default JobListing;
