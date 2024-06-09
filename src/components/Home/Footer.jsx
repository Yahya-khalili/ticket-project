import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-blue-600 py-10">
      <div className="container mx-auto px-4">
        <div className="row flex flex-wrap">
          <div className="footer-col w-full sm:w-1/2 md:w-1/4 p-4">
            <h4 className="text-white text-lg font-medium mb-6 relative">
              COMPANY
              <span className="absolute left-0 bottom-0 h-0.5 w-12 bg-blue-300"></span>
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition duration-300"
                >
                  ABOUT US
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition duration-300"
                >
                  OUR SERVICES
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition duration-300"
                >
                  PRIVACY POLICY
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition duration-300"
                >
                  AFFILIATE PROGRAM
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col w-full sm:w-1/2 md:w-1/4 p-4">
            <h4 className="text-white text-lg font-medium mb-6 relative">
              GET HELP
              <span className="absolute left-0 bottom-0 h-0.5 w-12 bg-blue-300"></span>
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition duration-300"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition duration-300"
                >
                  SHIPPING
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition duration-300"
                >
                  RETURNS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition duration-300"
                >
                  ORDER STATUS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition duration-300"
                >
                  PAYMENT METHODS
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col w-full sm:w-1/2 md:w-1/4 p-4">
            <h4 className="text-white text-lg font-medium mb-6 relative">
              ONLINE TICKETS
              <span className="absolute left-0 bottom-0 h-0.5 w-12 bg-blue-300"></span>
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition duration-300"
                >
                  CONCERTS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition duration-300"
                >
                  EVENEMENTS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition duration-300"
                >
                  MEETING
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col w-full sm:w-1/2 md:w-1/4 p-4">
            <h4 className="text-white text-lg font-medium mb-6 relative">
              FOLLOW UPS
              <span className="absolute left-0 bottom-0 h-0.5 w-12 bg-blue-300"></span>
            </h4>
            <div className="social-links flex space-x-4">
              <a
                href="#"
                className="text-white bg-gray-800 hover:bg-white hover:text-gray-900 transition duration-300 w-10 h-10 rounded-full flex items-center justify-center"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-white bg-gray-800 hover:bg-white hover:text-gray-900 transition duration-300 w-10 h-10 rounded-full flex items-center justify-center"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-white bg-gray-800 hover:bg-white hover:text-gray-900 transition duration-300 w-10 h-10 rounded-full flex items-center justify-center"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-white bg-gray-800 hover:bg-white hover:text-gray-900 transition duration-300 w-10 h-10 rounded-full flex items-center justify-center"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
