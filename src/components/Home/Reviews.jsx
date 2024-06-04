import profile from '../../assets/profile.webp'

const testimonials = [
  {
    name: "JACK",
    image: profile, 
    stars: 5,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "ELI",
    image: profile, 
    stars: 3,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "BRAN",
    image: profile, 
    stars: 4,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

const Reviews = () => {
  return (
    <div className="testimonials py-10 text-center text-gray-700">
      <div className="inner mx-auto overflow-hidden px-5 max-w-6xl">
        <h2 className="text-2xl font-bold">Testimonials</h2>
        <div className="border-b-2 border-gray-400 w-40 my-6 mx-auto"></div>
        <div className="row flex flex-wrap justify-center">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col flex-1 max-w-sm p-4">
              <div className="testimonial bg-white p-6 rounded-lg shadow-md hover:bg-gray-100">
                <img
                  className="w-24 h-24 rounded-full mx-auto"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="name text-xl font-semibold uppercase my-4">
                  {testimonial.name}
                </div>
                <div className="stars text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`fas fa-star ${
                        i < testimonial.stars
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    ></i>
                  ))}
                </div>
                <p className="text-gray-600">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
