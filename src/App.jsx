import React, { useState } from 'react';
import NewsList from './components/NewsList';
import NewsEditor from './components/NewsEditor';
import './App.css';

function App() {
  // Endi faqat tanlangan yangilikning ID'sini saqlaymiz
  const [selectedNewsId, setSelectedNewsId] = useState(null);

  // Bu funksiya NewsList'dan yangilik ID'sini qabul qiladi
  const handleNewsSelect = (newsId) => {
    setSelectedNewsId(newsId);
  };

  // Bu funksiya NewsEditor'dan orqaga qaytish signalini qabul qiladi
  const handleBackToList = () => {
    setSelectedNewsId(null);
  };

  return (
    <div className="app-container">
      <h1>Новостной портал</h1>
      {selectedNewsId ? (
        // Agar ID tanlangan bo'lsa, NewsEditor'ni ko'rsatamiz va unga ID'ni beramiz
        <NewsEditor newsId={selectedNewsId} onBack={handleBackToList} />
      ) : (
        // Agar ID tanlanmagan bo'lsa, NewsList'ni ko'rsatamiz
        <NewsList onNewsSelect={handleNewsSelect} />
      )}
    </div>
  );
}

export default App;