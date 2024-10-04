import React from "react";

function TestimonialCard({ name, img, review }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg text-center">
      <img
        src={img}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-400">{review}</p>
    </div>
  );
}

export default TestimonialCard;
