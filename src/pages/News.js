import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import Card from '../components/pyk/News'; // Убедитесь, что этот путь правильный

const News = () => {
  const [cardsData, setCardsData] = useState(null);

  const fetchCardData = async () => {
    try {
      const response = await axios.get("https://api.omega-centre.ru/api/v1/new/");
      setCardsData(response.data.posts); // Устанавливаем данные карточки из ответа
    } catch (error) {
      console.error('Error fetching card data:', error);
    }
  };

  useEffect(() => {
    fetchCardData();
  }, []); // Зависимость пустая, чтобы функция вызывалась только один раз при монтировании

  if (!cardsData) {
    return <div>Loading...</div>; // Пока данные загружаются, показываем сообщение о загрузке
  }

  return (
    <Layout>
      <h1>Новости</h1>
      <div>
        {cardsData.map((card) => (
          <Card key={card.id} cardData={card} />
        ))}
      </div>
    </Layout>
  );
};

export default News;
