import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://newsdata.io/api/1/news?apikey=pub_864869fc549ab288d8d2099c0d898b6018023&q=India ')
      .then(response => response.json())
      .then(data => {
        console.log(data.results)
        setArticles(data.results)
        })
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
              <img src={article.source_icon} alt={article.title} />
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.link} target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
