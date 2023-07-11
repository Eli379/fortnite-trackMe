'use client'

import { useState } from 'react';
import TrackModal from '../components/TrackModal';

type Cosmetic = {
  name: string;
  type: {
    value: string;
  };
  rarity: {
    displayValue: string;
  };
  description: string;
  images: {
    featured: string;
  };
};

const SearchCosmetic = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cosmetic, setCosmetic] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchComplete, setIsSearchComplete] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const vBucksIconUrl = 'https://fortnite-api.com/images/vbuck.png';

  const handleSearch = async () => {
    setIsLoading(true);
    setIsSearchComplete(false);

    try {
      const response = await fetch(
        `https://fortnite-api.com/v2/cosmetics/br/search?name=${searchTerm}`
      );
      const { data } = await response.json();

      setCosmetic(data);
    } catch (error) {
      console.log('Error searching cosmetic:', error);
      setCosmetic(null);
    } finally {
      setIsLoading(false);
      setIsSearchComplete(true);
    }
  };

  const handleTrackItem = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4">
          Fortnite Cosmetics Search
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
          className="border border-purple-200 rounded flex"
        >
          <input
            type="text"
            className="block w-full px-4 py-2 bg-white dark:bg-gray-900 border rounded-l-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter cosmetic name"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
            ) : (
              'Search'
            )}
          </button>
        </form>
        {cosmetic && isSearchComplete ? (
          <div className="mt-4">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow cursor-pointer transition duration-300 ease-in-out transform hover:scale-101 hover:bg-gray-100 dark:hover:bg-gray-500">
              <div className="relative group">
                <img
                  src={cosmetic.images.featured}
                  alt={cosmetic.name}
                  className="w-full h-auto object-contain mb-4"
                />
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"></div>
              </div>
              <h3 className="text-lg font-bold mb-2">{cosmetic.name}</h3>
              <p className="text-sm text-gray-600">Type: {cosmetic.type.value}</p>
              <p className="text-sm text-gray-600">
                Rarity: {cosmetic.rarity.displayValue}
              </p>
              <p className="text-sm italic mt-2">{cosmetic.description}</p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4 ml-auto"
                onClick={handleTrackItem}
              >
                Track Me!
              </button>
            </div>
          </div>
        ) : isSearchComplete ? (
          <p className="mt-4 text-red-500">No cosmetics found.</p>
        ) : null}
        <TrackModal
          cosmeticName={cosmetic?.name}
          isOpen={isModalOpen}
          onClose={closeModal}
        />        
      </div>
    </main>
  );
};

export default SearchCosmetic;
