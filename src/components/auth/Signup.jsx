import React from "react";
import Navbar from "../Home/Navbar";

function SignUp() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-12">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-blue-900 flex items-center justify-center">
            <span className="text-yellow-400 font-black">Even</span>
            <span className="text-blue-900 font-black">tick</span>
          </h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Nom</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Mot de passe</label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-400 text-blue-900 py-2 rounded-lg hover:bg-yellow-500"
            >
              S'inscrire
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
