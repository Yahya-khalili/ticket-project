import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

// Sample data for events
const eventsData = [
  { id: 1, title: "Event 1", category: "Music" },
  { id: 2, title: "Event 2", category: "Sports" },
  { id: 3, title: "Event 3", category: "Technology" },
  { id: 4, title: "Event 4", category: "Music" },
  { id: 5, title: "Event 5", category: "Food & Drink" },
  // Add more events as needed
];

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredEvents = eventsData.filter((event) => {
    const categoryMatches = selectedCategory === "All" || event.category === selectedCategory;
    const titleMatches = event.title.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatches && titleMatches;
  });

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search events..."
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            value={searchTerm}
            onChange={handleSearch}
          />
          <FaSearch className="ml-2 text-gray-500" />
        </div>
        <div>
          <select
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          >
            <option value="All">All Categories</option>
            <option value="Music">Music</option>
            <option value="Sports">Sports</option>
            <option value="Technology">Technology</option>
            <option value="Food & Drink">Food & Drink</option>
            {/* Add more categories as needed */}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img src={`https://via.placeholder.com/400x200?text=${event.title}`} alt={event.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{event.title}</h2>
              <p className="text-sm text-gray-500">{event.category}</p>
              {/* Add more event details here */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
