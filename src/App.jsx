// src/App.jsx
import React, { useState } from 'react';
import { newsData } from './data';
import NewsList from './components/NewsList';
import NewsEditor from './components/NewsEditor';
import './App.css';

function App() {
  // 3. Asosiy komponentda holat yaratish (tanlangan yangilik uchun)
  const [selectedNews, setSelectedNews] = useState(null);

  // Yangilik tanlanganda holatni yangilaydigan funksiya
  const handleSelectNews = (news) => {
    setSelectedNews(news);
  };

  // Ro'yxatga qaytish uchun holatni tozalaydigan funksiya
  const handleBackToList = () => {
    setSelectedNews(null);
  };

  return (
    <>
      {/* 6. Shartli renderlash: agar yangilik tanlangan bo'lsa, Editor'ni ko'rsat, aks holda List'ni */}
      {selectedNews ? (
        // 5. Yangilikni batafsil ko'rsatuvchi komponent
        <NewsEditor news={selectedNews} onBack={handleBackToList} />
      ) : (
        // 4. Yangiliklar ro'yxatini (slayder) ko'rsatuvchi komponent
        <NewsList news={newsData} onNewsSelect={handleSelectNews} />
      )}
    </>
  );
}

export default App;