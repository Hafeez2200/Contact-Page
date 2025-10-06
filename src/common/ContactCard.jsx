import React from "react";
import { FaBuilding } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { BiTimeFive } from "react-icons/bi";
const ContactCard = () => {
  return (
    <div className=" grid sm:grid-cols-2 gap-6 mb-12">
      <div className=" space-y-16">
        <div
          className=" w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full
               flex items-center justify-center mb-4"
        >
          <FaBuilding className=" text-white  h-5 w-5" />
        </div>
        <div className=" space-y-2">
          <h2 className=" text-lg font-semibold text-white">Head Office</h2>
          <p className=" text-gray-300 text-sm">
            Jln Cempaka Wangi No 22 <br /> Jakarta - Indonesia
          </p>
        </div>
        
      </div>

      <div className=" space-y-16">
        <div
          className=" w-12 h-12 bg-blue-500 rounded-full
               flex items-center justify-center mb-4"
        >
          <HiOutlineMail className=" text-white h-5 w-5" />
        </div>
        <div className=" space-y-2">
          <h2 className=" text-lg font-semibold text-white">Email Support</h2>
          <p className=" text-gray-300 text-sm">
            support@yourdomian.tld <br />
            hello@yourdomian.tld
          </p>
        </div>
      </div>

      <div className=" space-y-16">
        <div
          className=" w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full
               flex items-center justify-center mb-4"
        >
          <FiPhoneCall className=" text-white  h-5 w-5" />
        </div>
        <div className=" space-y-2">
          <h2 className=" text-lg font-semibold text-white">Let's Talk</h2>
          <p className=" text-gray-300 text-sm">
            Phone : +12 21 2002-2012 <br /> Fax : +12 21 2002-2013
          </p>
        </div>
      </div>

      <div className=" space-y-16">
        <div
          className=" w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full
               flex items-center justify-center mb-4"
        >
          <BiTimeFive className=" text-white  h-5 w-5" />
        </div>
        <div className=" space-y-2">
          <h2 className=" text-lg font-semibold text-white">Working Hours</h2>
          <p className=" text-gray-300 text-sm">
            Monday - Friday <br />09am - 05pm
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
