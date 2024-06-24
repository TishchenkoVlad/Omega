
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Для работы с HTTP запросами

const Card = ({ cardId }) => {
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    // Функция для получения данных с бэкенда
    const fetchCardData = async () => {
      try {
        const response = await axios.get(`https://api.omega-centre.ru/api/v1/new/${cardId}`);
        setCardData(response.data); // Устанавливаем данные карточки из ответа
      } catch (error) {
        console.error('Error fetching card data:', error);
      }
    };

    fetchCardData(); // Вызываем функцию загрузки данных при монтировании компонента
  }, [cardId]); // Монтируем компонент при изменении cardId

  if (!cardData) {
    return <div>Loading...</div>; // Пока данные загружаются, показываем сообщение о загрузке
  }

  return (
    <div className="card">
      <h2>{cardData.title}</h2>
      <p>{cardData.description}</p>
    </div>
  );
};

export default Card;



