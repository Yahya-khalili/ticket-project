import hero from "../../assets/hero.jpg";

function Hero() {
  return (
    <div
      className="text-white py-24"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "88vh",
      }}
    >
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          Découvrir des Évènements Passionnants Près de Chez Vous
        </h1>
        <p className="text-lg mb-8">
          Trouvez les meilleurs événements près de chez vous.
        </p>
        <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-rose-500">
          En savoir plus
        </button>
      </div>
    </div>
  );
}

export default Hero;
