import React, { useEffect, useState } from 'react';
import Section from './Section';
import ShopItem from './ShopItem';

const ProductList: React.FC = () => {
  const [shopItems, setShopItems] = useState([]);
  const vBucksIconUrl = 'https://fortnite-api.com/images/vbuck.png';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fortnite-api.com/v2/shop/br/combined');
        const data = await response.json();
        setShopItems(data.data.featured.entries);
      } catch (error) {
        console.log('Error fetching shop items:', error);
      }
    };

    fetchData();
  }, []);

  // Extract section names from shop items
  const sectionNames = Array.from(new Set(shopItems.map((item: any) => item.section.name)));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Fortnite Shop Items</h1>
      {sectionNames.map((sectionName: any) => (
        <Section key={sectionName} name={sectionName}>
          {shopItems
            .filter((item: any) => item.section.name === sectionName)
            .map((item) => (
              <ShopItem
                key={item.itemId}
                name={item.bundle ? item.bundle.name : item.items[0].name}
                image={item.bundle ? item.bundle.image : item.items[0].images.icon}
                rarity={item.items[0].rarity.displayValue}
                cost={item.finalPrice}
                vbucksIconUrl={vBucksIconUrl}
              />
            ))}
        </Section>
      ))}
    </div>
  );
};

export default ProductList;
