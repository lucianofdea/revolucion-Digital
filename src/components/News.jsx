import '../../src/App.css';

import { NewsData } from "../data/newsData";
import { NewCard } from "./NewCard";


export const News = () => {

  //spread operator
   const news = [...NewsData];

  return (
    <div className='news-container'>
      <h1>Mi App de Noticias</h1>
        <div className='news-container'>
          <h2>Noticias del dia</h2>
          <div className="news-list ">
          {news.map((news, i) => (
            <NewCard
              key={news.title + i} 
              title={news.title}
              description={news.description}
              source={news.source}
              image={news.image}
            />
          ))}
          </div>
        </div>
    
    </div>
  )
}



