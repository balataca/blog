import React, { useState, useEffect } from 'react';
import { apiGetArticles } from '../../services/api';
import ArticlesList from './ArticlesList';

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
    <section>
      <ArticlesList articles={articles} />
    </section>
  );
};

export default Articles;
