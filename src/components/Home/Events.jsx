import event1 from "../../assets/event1.jpg";
import event2 from "../../assets/event2.jpg";
import event3 from "../../assets/event3.jpg";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Concert",
      description:
        "Browse through our curated selection of events and choose the one that suits you best",
      imageUrl: event1,
      buttonText: "Réserver",
    },
    {
      id: 2,
      title: "Evenement",
      description:
        "Browse through our curated selection of events and choose the one that suits you best",
      imageUrl: event2,
      buttonText: "Réserver",
    },
    {
      id: 3,
      title: "Meeting",
      description:
        "Browse through our curated selection of events and choose the one that suits you best",
      imageUrl: event3,
      buttonText: "Réserver",
    },
  ];
  return (
    <div className="mb-16">
      <h1 className="text-3xl font-bold text-red-500 text-center mb-12 px-40">
        Découvrez et réservez facilement des événements passionnants sur notre
        plateforme
      </h1>
      <div className="flex justify-center space-x-6">
        <div className="flex justify-center space-x-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="max-w-xs rounded overflow-hidden shadow-md"
            >
              <img
                className="w-full h-48 object-cover"
                src={event.imageUrl}
                alt={event.title}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{event.title}</div>
                <p className="text-gray-700 text-base">{event.description}</p>
              </div>
              <div className="px-6 pt-4 pb-2 text-center">
                <button className="bg-red-500 text-white font-bold py-2 px-4 mb-3">
                  {event.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
