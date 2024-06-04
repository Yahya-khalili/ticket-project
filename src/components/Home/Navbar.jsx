import React from "react";

function Navbar() {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <span className="text-red-500 ml-6 font-black">Eventify</span>
        </h1>
        <ul className="flex space-x-6">
          <li>
            <a
              href="#"
              className="hover:underline font-poly px-4 font-semibold"
            >
              Réserver
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline px-4 font-semibold">
              Événements
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline px-4 font-semibold">
              A propos
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline px-4 font-semibold">
              Contact
            </a>
          </li>
        </ul>
        <div className="flex space-x-4">
          <button className="bg-white text-red-500 px-4 py-2 border-2 border-solid border-red-500 hover:bg-gray-200 font-bold">
            S'inscrire
          </button>
          <button className="bg-red-500 text-white px-4 py-2 hover:bg-red-600 font-bold">
            Se connecter
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
