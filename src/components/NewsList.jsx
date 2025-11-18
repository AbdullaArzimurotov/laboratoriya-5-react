import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem'; // Agar sizda alohida NewsItem bo'lsa

// Komponent endi faqat onNewsSelect funksiyasini qabul qiladi
function NewsList({ onNewsSelect }) {
  const [news, setNews] = useState([]); // Yangiliklarni saqlash uchun state
  const [loading, setLoading] = useState(true); // Yuklanish holatini saqlash uchun
  const [error, setError] = useState(null); // Xatolikni saqlash uchun

  // useEffect komponent birinchi marta chizilganda ishga tushadi
  useEffect(() => {
    // Axios yordamida serverga GET so'rov yuboramiz
    axios.get('http://localhost:3001/news')
      .then(response => {
        setNews(response.data); // Kelgan ma'lumotlarni state'ga yozamiz
        setLoading(false); // Yuklanish tugadi
      })
      .catch(error => {
        setError('Ma\'lumotlarni yuklashda xatolik yuz berdi.'); // Xatolikni saqlaymiz
        setLoading(false); // Yuklanish tugadi
      });
  }, []); // [] bo'sh massiv bu effekt faqat bir marta ishlashini ta'minlaydi

  if (loading) return <p>Yuklanmoqda...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="news-list-container">
      {news.map(item => (
        // NewsItem yoki to'g'ridan-to'g'ri shu yerda chizishingiz mumkin
        <div key={item.id} className="news-card" onClick={() => onNewsSelect(item.id)}>
             <img src={item.imageUrl} alt={item.title} />
             <h3>{item.title}</h3>
             <p>{item.shortText}</p>
        </div>
      ))}
    </div>
  );
}

export default NewsList;