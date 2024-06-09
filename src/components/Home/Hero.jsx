import hero from "../../assets/hero.jpg";

function Hero() {
  return (
    <div
      className="text-white py-24 flex items-center justify-center"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        fontFamily: "'Montserrat', sans-serif", // Apply the new font
      }}
    >
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          Discover the features of our platform
        </h1>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          Notre plateforme de réservation d'événements offre un processus de
          réservation simple, des paiements sécurisés et une assistance 24h/24
          et 7j/7. Grâce à notre interface conviviale, vous pouvez rapidement
          trouver et réserver vos événements préférés.
        </p>
        <div className="hero-buttons flex justify-center space-x-4">
          <button className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-bold hover:bg-yellow-500 transition duration-300">
            Get Ticket
          </button>
          <button className="bg-blue-900 text-white px-6 py-2 border-2 border-white rounded-full font-bold hover:bg-blue-700 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
