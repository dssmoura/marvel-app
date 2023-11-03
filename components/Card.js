import React from 'react';

const Card = ({ name, description, thumbnail }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg m-4 bg-slate-400">
      <div className="w-32 h-32 mx-auto mt-4">
        <img className="w-full h-full object-cover rounded-full" src={thumbnail} alt={name} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;
