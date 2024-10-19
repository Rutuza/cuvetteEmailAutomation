import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import checkCircle from "../icons/checkCircle.svg";

function OTPSuccessful() {
  return (
    <div className="border-[1px] border-blue-500 rounded-md p-6">
      <div className="text-center">
        <h2 className="font-medium text-2xl">Sign Up</h2>
        <p className="text-gray-500 text-sm">Lorem Ipsum is simply a text</p>
      </div>

      <form action="">
            <div className="my-6 flex items-center justify-between border-[2px] px-2 border-gray-300 rounded-lg">
                <div className="flex items-center justify-center gap-2">
                    <MdOutlineEmail />
                    <input
                        type="email"
                        name=""
                        id="email"
                        placeholder="Email OTP"
                        className="w-full focus:outline-none px-2 py-2 bg-transparent"
                    />
                </div>
                <div className="checkCircle">
                    <img src={checkCircle} alt="" />
                </div>
            </div>
            <div className="flex items-center justify-between border-[2px] px-2 border-gray-300 rounded-lg">
                <div className="flex items-center justify-center gap-2">
                    <MdLocalPhone />
                    <input
                        type="text"
                        name=""
                        id="ph"
                        placeholder="Mobile OTP"
                        className="w-full focus:outline-none px-2 py-2 bg-transparent"
                    />
                </div>
                <div className="checkCircle">
                    <img src={checkCircle} alt="" />
                </div>
            </div>
      </form>
    </div>
  );
}

export default OTPSuccessful;
