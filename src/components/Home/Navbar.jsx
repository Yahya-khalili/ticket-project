import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <span className="text-red-500 ml-6 font-black">Eventify</span>
        </h1>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:underline px-4 font-semibold">
            Réserver
          </a>
          <a href="#" className="hover:underline px-4 font-semibold">
            Événements
          </a>
          <a href="#" className="hover:underline px-4 font-semibold">
            A propos
          </a>
          <a href="#" className="hover:underline px-4 font-semibold">
            Contact
          </a>
        </div>
        <div className="hidden md:flex space-x-4">
          <button className="bg-white text-red-500 px-4 py-2 border-2 border-solid border-red-500 hover:bg-gray-200 font-bold">
            S'inscrire
          </button>
          <button className="bg-red-500 text-white px-4 py-2 hover:bg-red-600 font-bold">
            Se connecter
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
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
            <a href="#" className="hover:underline px-4 font-semibold">
              Réserver
            </a>
            <a href="#" className="hover:underline px-4 font-semibold">
              Événements
            </a>
            <a href="#" className="hover:underline px-4 font-semibold">
              A propos
            </a>
            <a href="#" className="hover:underline px-4 font-semibold">
              Contact
            </a>
            <button className="bg-white text-red-500 px-4 py-2 border-2 border-solid border-red-500 hover:bg-gray-200 font-bold">
              S'inscrire
            </button>
            <button className="bg-red-500 text-white px-4 py-2 hover:bg-red-600 font-bold">
              Se connecter
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
