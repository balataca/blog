import React, { useState, useEffect } from 'react';
import { apiGetArticles } from '../../services/api';

const Articles = () => {
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    const response = await apiGetArticles();
    setArticles(response);
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div>
      {articles.map((article) => (
        <div>
          <h1>{article.title}</h1>
          <p>{article.body}</p>
          <img src={article.image} alt="Article" />
        </div>
      ))}
    </div>
  );
};

export default Articles;
