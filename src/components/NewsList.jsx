// src/components/NewsList.jsx
import React, { useState } from 'react';
import NewsItem from './NewsItem';

function NewsList({ news, onNewsSelect }) {
  const [currentNews, setCurrentNews] = useState(news);

  const handleNext = () => {
    setCurrentNews((prevNews) => {
      const newItems = [...prevNews];
      const firstItem = newItems.shift();
      newItems.push(firstItem);
      return newItems;
    });
  };

  const handlePrev = () => {
    setCurrentNews((prevNews) => {
      const newItems = [...prevNews];
      const lastItem = newItems.pop();
      newItems.unshift(lastItem);
      return newItems;
    });
  };

  return (
    <div className="container">
      <div className="slide">
        {currentNews.map((newsItem, index) => (
          <NewsItem
            key={newsItem.id}
            news={newsItem}
            // Ikkinchi element (index=1) har doim aktiv hisoblanadi
            isActive={index === 1}
            onSelect={onNewsSelect}
          />
        ))}
      </div>
      <div className="button">
        <button className="prev" onClick={handlePrev}> ◁ </button>
        <button className="next" onClick={handleNext}> ▷ </button>
      </div>
    </div>
  );
}

export default NewsList;