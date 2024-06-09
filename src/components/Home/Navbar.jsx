import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 bg-blue-900 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">
          <span className="text-yellow-400 font-black transition-transform duration-300 transform hover:scale-110">
            Even
          </span>
          <span className="text-white font-black transition-transform duration-300 transform hover:scale-110">
            tick
          </span>
        </h1>
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="#" className="hover:underline px-4 font-semibold text-white">
            Réserver
          </Link>
          <Link to="#" className="hover:underline px-4 font-semibold text-white">
            Événements
          </Link>
          <Link to="#" className="hover:underline px-4 font-semibold text-white">
            A propos
          </Link>
          <Link to="#" className="hover:underline px-4 font-semibold text-white">
            Contact
          </Link>
          <Link to="/signup" className="bg-white text-blue-900 px-4 py-2 border-2 border-solid border-blue-900 hover:bg-gray-200 font-bold rounded-full">
            S'inscrire
          </Link>
          <Link to="/signin" className="bg-yellow-400 text-blue-900 px-4 py-2 hover:bg-yellow-500 font-bold rounded-full">
            Se connecter
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <IoIosMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 mt-4">
            <Link to="#" className="hover:underline px-4 font-semibold text-white">
              Réserver
            </Link>
            <Link to="#" className="hover:underline px-4 font-semibold text-white">
              Événements
            </Link>
            <Link to="#" className="hover:underline px-4 font-semibold text-white">
              A propos
            </Link>
            <Link to="#" className="hover:underline px-4 font-semibold text-white">
              Contact
            </Link>
            <Link to="/signup" className="bg-white text-blue-900 px-4 py-2 border-2 border-solid border-blue-900 hover:bg-gray-200 font-bold rounded-full">
              S'inscrire
            </Link>
            <Link to="/signin" className="bg-yellow-400 text-blue-900 px-4 py-2 hover:bg-yellow-500 font-bold rounded-full">
              Se connecter
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
