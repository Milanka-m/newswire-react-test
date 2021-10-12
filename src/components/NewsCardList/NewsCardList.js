import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({ initialNews }) {
  const [count, setCount] = React.useState(10);
  const wrappRef = React.useRef(null);

  const handlerScroll = React.useCallback((e) => {
    if (e.target) {
      const scrollEnd =
        e.target.scrollWidth - e.target.scrollLeft - 370 <=
        e.target.clientWidth;
      if (scrollEnd) {
        setCount((pre) => pre + 1);
      }
    }
  }, []);

  React.useEffect(() => {
    if (wrappRef.current && count >= initialNews.length) {
      wrappRef.current.removeEventListener("scroll", handlerScroll);
    }
  }, [count, handlerScroll, initialNews]);
  
  React.useEffect(() => {
    const { current } = wrappRef;
    current.addEventListener("scroll", handlerScroll);
    return () => {
      current.removeEventListener("scroll", handlerScroll);
    };
  }, [handlerScroll]);

  return (
    <section className="wrapp">
      <ul className="wrapp__list" ref={wrappRef}>
        {initialNews.slice(0, count).map(news => { 
            return ( 
              <NewsCard news={news}
              key={news.id} />
            ) 
          })}
      </ul>  
    </section> 
  );
}

export default NewsCardList;