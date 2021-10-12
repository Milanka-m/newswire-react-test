import React from 'react'; 
import './NewsCard.css';

function NewsCard({ news }) { 
  const { title, photo, text, rating } = news;
  console.log(news);

  return ( 
    <li>
      <div className="wrapp__item">
        <p className="wrapp__title">
          {title} - рейтинг: {rating}
        </p>
        <img src={photo} className="wrapp__photo" alt={title} />
        <p className="wrapp__text">{text}</p>
      </div>
    </li>
  ) 
} 
 
export default NewsCard; 