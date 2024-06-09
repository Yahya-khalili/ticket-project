import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="bg-white py-12 mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-blue-500">
          Entrer en contact
        </h2>
        <p className="mt-4 text-center text-lg text-gray-600">
          Vous avez une question ou besoin d'aide ? Contactez-nous dès
          aujourd'hui !
        </p>
        <div className="mt-10 flex flex-col md:flex-row justify-center items-start md:space-x-10">
          <div className="flex flex-col items-center mb-10 md:mb-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white">
              <MdOutlineMail size={28} />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Email</h3>
            <p className="mt-2 text-base text-gray-600 text-center">
              Envoyez-nous un e-mail et nous vous répondrons dans les plus brefs
              délais.
            </p>
            <p className="mt-2 text-base text-gray-600">contact@eventick.com</p>
          </div>
          <div className="flex flex-col items-center mb-10 md:mb-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white">
              <FaPhoneAlt size={25} />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              Téléphone
            </h3>
            <p className="mt-2 text-base text-gray-600 text-center">
              Appelez-nous et parlez avec notre sympathique équipe de support
              client.
            </p>
            <p className="mt-2 text-base text-gray-600">+123 456 7890</p>
          </div>
          <div className="flex flex-col items-center mb-10 md:mb-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white">
              <FaLocationDot size={27}/>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              Localisation
            </h3>
            <p className="mt-2 text-base text-gray-600 text-center">
              Visitez notre bureau pendant les heures de bureau pour une
              assistance en personne.
            </p>
            <p className="mt-2 text-base text-gray-600">
              123 Sample St, Paris, France
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
