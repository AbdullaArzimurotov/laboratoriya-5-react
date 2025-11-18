// src/components/NewsEditor.jsx
import React from 'react';

function NewsEditor({ news, onBack }) {
  return (
    <div className="news-detail-container">
      <div className="news-detail-content">
        <button className="back-button" onClick={onBack}>
          &larr; Назад к новостям
        </button>
        <img src={news.imageUrl} alt={news.title} className="news-detail-image" />
        <h1>{news.title}</h1>
        <p>{news.fullText}</p>
      </div>
    </div>
  );
}

export default NewsEditor;