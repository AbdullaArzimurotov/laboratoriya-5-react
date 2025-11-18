// src/components/NewsItem.jsx
import React from 'react';

function NewsItem({ news, isActive, onSelect }) {
  return (
    <div
      className="item"
      style={{ backgroundImage: `url(${news.imageUrl})` }}
    >
      {/* Kontent faqat aktiv slayd uchun ko'rsatiladi */}
      {isActive && (
        <div className="content">
          <div className="name">{news.title}</div>
          <div className="des">{news.shortText}</div>
          <button onClick={() => onSelect(news)}>Подробнее</button>
        </div>
      )}
    </div>
  );
}

export default NewsItem;