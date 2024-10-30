import React from "react";
import Button from "./Button";

const Card = ({ data, friendHandle, index }) => {
  const { name, profession, imageUrl, isFriend } = data;
  console.log(name, profession, imageUrl, isFriend);

  return (
    <div className="max-w-xs mx-auto w-56 bg-white rounded-lg shadow-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={imageUrl} alt="Mac" />
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600 mb-4">{profession}</p>
        
        <Button isFriend={isFriend} friendHandle={friendHandle} index={index}/> {/* Component */}
      </div>
    </div>
  );
};

export default Card;
