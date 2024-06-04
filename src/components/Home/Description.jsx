import process from "../../assets/process.png";
import support from "../../assets/support.png";
import payment from "../../assets/payment.png";

const Description = () => {
  return (
    <div className="container mx-auto mt-10 px-4 py-8 mb-14">
      <h1 className="text-3xl font-bold text-red-500 text-center mb-8">
        Découvrez les fonctionnalités de notre plateforme
      </h1>
      <h3 className="text-sm font-bold w-auto px-20 text-center mb-8">
        Notre plateforme de réservation d'événements offre un processus de
        réservation simple, des paiements sécurisés et une assistance 24h/24 et
        7j/7. Grâce à notre interface conviviale, vous pouvez rapidement trouver
        et réserver vos événements préférés
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <img src={process} alt="Processus" className="w-24 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-purple-500 mb-2">
            Processus De Réservation Facile
          </h2>
          <p className="text-gray-700">
            Notre plateforme offre une expérience de réservation transparente et
            sans tracas.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <img src={payment} alt="Paiements" className="w-24 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-purple-500 mb-2">
            Paiements sécurisés
          </h2>
          <p className="text-gray-700">
            Soyez assuré que vos paiements sont sécurisés et protégés.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <img src={support} alt="Support" className="w-24 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-purple-500 mb-2">
            24/7 Support
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
