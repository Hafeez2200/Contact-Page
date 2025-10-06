import React from 'react'
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
const Socialmedia = () => {
  return (
     <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300"
                aria-label="Twitter"
              >
                <FaTwitter className="text-xl" />
              </a>

              <a
                href="#"
                className="p-3 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-xl" />
              </a>

              <a
                href="#"
                className="p-3 rounded-full bg-blue-900 text-white hover:bg-blue-950 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-xl" />
              </a>

              <a
                href="#"
                className="p-3 rounded-full bg-red-600 text-white hover:bg-red-700 transition-all duration-300"
                aria-label="YouTube"
              >
                <FaYoutube className="text-xl" />
              </a>
            </div>
  )
}

export default Socialmedia