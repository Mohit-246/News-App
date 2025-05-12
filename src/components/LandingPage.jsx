import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=7e8b91d76c3a4b8588d5d34ca1b4f5d2')
      .then(response => response.json())
      .then(data => setArticles(data.articles))
      .catch(error => console.error("Error in fetching news", error));
  }, []);

  return (
    <div className="landing">
      <header className="landing-header">
        <div className="logo">
          <img src="https://img.icons8.com/color/48/news.png" alt="NewsMate" />
          <h1>NewsMate</h1>
        </div>
        <nav>
          <button onClick={() => navigate('/')}>Home</button>
          <button onClick={() => navigate('/login')}>Login</button>
          <button onClick={() => navigate('/register')}>Register</button>
        </nav>
      </header>

      <section className="top-news">
        <h2>Top News</h2>
        <div className="articles">
          {articles.map((article, id) => (
            <div className="news-card" key={id}>
              <img src={article.urlToImage} alt={article.title} />
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="_blank">Read more</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
