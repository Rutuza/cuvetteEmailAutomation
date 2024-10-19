import { useState } from "react";
import reactLogo from "./assets/react.svg";
import logo from "../src/assets/icons/logo.svg";
import "./App.css";

import Register from "./assets/components/Register";
import SignUpVerify from "./assets/components/SignUpVerify";
import OTPSuccessful from "./assets/components/OTPSuccessful";
import Sidebar from "./assets/components/Sidebar";
import JobDisplayForm from "./assets/components/JobDisplayForm";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobListing from "./assets/components/JobListing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div className="top p-4 flex items-center flex-row justify-between text-xl font-semibold border-b-[1px] border-gray-400">
          <img src={logo} alt="" />
          <div className="contact text-gray-600">Contact</div>
        </div>

        <div className="flex items-center justify-between gap-44 p-10 max-sm:grid">
          {/* <div>
            <p className="w-96 text-gray-500 max-sm:text-justify max-sm:w-full">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley
            </p>
          </div> */}
          <div className="w-full">
            {/* <SignUpVerify /> */}
            {/* <Register /> */}
          </div>
        </div>

        <div>
          {/* <Sidebar /> */}
          <JobListing />
        </div>
      </div>
    </>
  );
}

export default App;
