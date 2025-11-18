import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Komponent 'newsId' va 'onBack' funksiyasini qabul qiladi
function NewsEditor({ newsId, onBack }) {
  const [newsItem, setNewsItem] = useState(null); // Bitta yangilikni saqlash uchun
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Bu effekt newsId o'zgargan har safar ishga tushadi
    if (newsId) {
      setLoading(true);
      // Endi faqat bitta yangilikni ID orqali so'raymiz
      axios.get(`http://localhost:3001/news/${newsId}`)
        .then(response => {
          setNewsItem(response.data);
          setLoading(false);
        })
        .catch(error => {
          setError('Bu yangilikni yuklashda xatolik yuz berdi.');
          setLoading(false);
        });
    }
  }, [newsId]); // Effektning qaramligi - newsId

  if (loading) return <p>Yuklanmoqda...</p>;
  if (error) return <p>{error}</p>;
  if (!newsItem) return null; // Agar ma'lumot hali kelmagan bo'lsa

  return (
    <div className="news-detail-container">
      <button onClick={onBack} className="back-button">← Orqaga</button>
      <h2>{newsItem.title}</h2>
      <img src={newsItem.imageUrl} alt={newsItem.title} />
      <p>{newsItem.fullText}</p>
    </div>
  );
}

export default NewsEditor;