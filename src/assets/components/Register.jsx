import React from 'react'
import { FiUser } from "react-icons/fi";
import { MdLocalPhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";

const Register = () => {
  return (
    <div className="">
    

    <form action="" className=" w-full p-6 border-[1px] border-gray-300 rounded-lg">
      <div className="text-center">
        <h2 className="signup text-2xl font-semibold">Sign Up</h2>
        <div className="subtext">Lorem Ipsum is simply text</div>
      </div>
    <div className='grid grid-flow-row gap-4'>
      <div className="flex items-center border-[1px] border-gray-300 rounded-sm px-2 bg-gray-100">
        <FiUser />
        <input
          type="text"
          placeholder="Name"
          className="w-full focus:outline-none px-2 py-2 bg-transparent"
        />
      </div>
      <div className="flex items-center border-[1px] border-gray-300 rounded-sm px-2 bg-gray-100">
        <MdLocalPhone />
        <input
          type="tel"
          placeholder="Phone no."
          className="w-full focus:outline-none px-2 py-2 bg-transparent"
        />
      </div>
      <div className="flex items-center border-[1px] border-gray-300 rounded-sm px-2 bg-gray-100">
        <FiUser />
        <input
          type="text"
          placeholder="Company Name"
          className="w-full focus:outline-none px-2 py-2 bg-transparent"
        />
      </div>
      <div className="flex items-center border-[1px] border-gray-300 rounded-sm px-2 bg-gray-100">
        <MdOutlineEmail />
        <input
          type="email"
          placeholder="Company Email"
          className="w-full focus:outline-none px-2 py-2 bg-transparent"
        />
      </div>
      <div className="flex items-center border-[1px] border-gray-300 rounded-sm px-2 bg-gray-100">
        <IoIosPeople />
        <input
          type="text"
          placeholder="Employee Size"
          className="w-full focus:outline-none px-2 py-2 bg-transparent"
        />
      </div>
    </div>

      <div>
        <p className="text-center font-semibold text-gray-500">By clicking on proceed you will accept our <br /><span className="tnc text-blue-500">Terms</span> & <span className="tnc text-blue-500">Conditions</span></p>
      </div>
      <button type="button" className="bg-blue-600 w-full rounded-md py-2 text-white font-medium">Proceed</button>
    </form>
  </div>
  )
}

export default Register