import process from "../../assets/process.png";
import support from "../../assets/support.png";
import payment from "../../assets/payment.png";

const Description = () => {
  return (
    <div className="container mx-auto mt-10 px-4 py-8 mb-14">
      <h1 className="text-3xl font-bold text-yellow-400 text-center mb-8">
        Découvrez les fonctionnalités de notre plateforme
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <img src={process} alt="Processus" className="w-24 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-blue-900 mb-2">
          Achetez des tickets
          </h2>
          <p className="text-gray-700">
          Achetez des tickets de qualité pour les meilleurs événements en toute sécurité !
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <img src={payment} alt="Paiements" className="w-24 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-blue-900 mb-2">
          Notre garantie 100 %
          </h2>
          <p className="text-gray-700">
          Éliminez les risques et assurez-vous une transaction sécurisée et protégée en faisant affaire avec eventick.com
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <img src={support} alt="Support" className="w-24 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-blue-900 mb-2">
            Support 24/7
          </h2>
          <p className="text-gray-700">
            Notre équipe d'assistance dédiée est disponible 24 heures sur 24
            pour vous aider.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
