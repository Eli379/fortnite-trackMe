import React from 'react';

interface ShopItemProps {
  name: string;
  image: string;
  rarity: string;
  cost: number;
  vbucksIconUrl: string;
}

const ShopItem: React.FC<ShopItemProps> = ({ name, image, rarity, cost, vbucksIconUrl }) => {
  return (
    <div className="bg-white rounded-lg p-2 shadow cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100">
      <div className="relative group">
        <img src={image} alt={name} className="w-full h-32 object-contain mb-2" />
        <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"></div>
      </div>
      <h3 className="text-base font-bold mb-1">{name}</h3>
      <p className="text-sm text-gray-600">Rarity: {rarity}</p>
      <p className="text-sm text-gray-600">
        Cost: {cost} <img src={vbucksIconUrl} alt="V-Bucks" className="inline-block w-4 h-4" />
      </p>
    </div>
  );
};

export default ShopItem;
