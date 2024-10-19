import React, { useState } from "react";
import axios from "axios";

import { MdOutlineEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";

const SignUpVerify = () => {
  const [emailOTP, setEmailOTP] = useState("");
  const [mobileOTP, setMobileOTP] = useState("");
  const [token, setToken] = useState(null);
  const [message, setMessage] = useState("");

  const handleEmailOTPSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:3000/email-login", { otp: emailOTP });
      setToken(response.data.token);
      localStorage.setItem("authToken", response.data.token);
      setMessage("Login Successful!");
    } catch (err) {
      setMessage("Invalid Email OTP");
    }
  };

  const handleMobileOTPSubmit = async () => {
    try{
      const response = await axios.post("http://localhost:3000/mobile-login", {otp: mobileOTP});
      setToken(response.data.token);
      localStorage.setItem("authnetication", response.data.token);
      setMessage("Login Successful!");
    } catch (err) {
      setMessage("Invalid mobile OTP");
    }
  }; 

  // Auto-login with JWT if token exists
  React.useEffect(() => {
    const savedToken = localStorage.getItem("authToken");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  return (

      <div className="border-[1px] border-blue-500 rounded-md p-4 w-full">
        <div className="text-center py-4">
          <h2 className="text-xl font-medium">Sign Up</h2>
          <p className="text-sm text-gray-500">Lorem Ipsum is simply a dummy text</p>
        </div>

        <form action="">
          <div className="w-full">
            <div className="email flex items-center gap-2 border-[2px] px-2 border-gray-300 rounded-sm">
              <MdOutlineEmail />
              <input
                type="email"
                name=""
                id="email"
                placeholder="Email OTP"
                className="w-full focus:outline-none px-2 py-2 bg-transparent"
                value={emailOTP}
                onChange={(e) => setEmailOTP(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="w-full mt-2 text-sm bg-blue-600 text-white p-1 rounded-sm mb-4"
            >
              Verify
            </button>
          </div>

          <div>
            <div className="password flex items-center gap-2 border-[2px] px-2 border-gray-300 rounded-sm">
              <MdLocalPhone />
              <input
                type="text"
                name=""
                id="pwd"
                placeholder="Mobile OTP"
                className="w-full focus:outline-none px-2 py-2 bg-transparent"
                value={mobileOTP}
                
              />
            </div>
            <button
              type="button"
              className="w-full mt-2 bg-blue-600 text-sm text-white p-1 rounded-sm  mb-4"
            >
              Verify
            </button>
          </div>
        </form>
      </div>
  );
};

export default SignUpVerify;
