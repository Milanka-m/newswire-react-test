import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import newsJsonData from '../../utils/news.json';

function Main() {
  const newsCards = newsJsonData.news.element;

  return (
    <main className="content">
      {newsCards.length > 0 ? (
        <NewsCardList 
          initialNews={newsCards}
        />
      ) : (
        <></> 
      )}
    </main>
  );
}

export default Main;