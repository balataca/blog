import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ArticleForm from '../ArticleForm';
import { apiGetArticle } from '../../services/api';

const UpdateArticle = ({ match }) => {
  const { id } = match.params;
  const [article, setArticle] = useState({});
  const [isLoading, setLoading] = useState(true);

  const getArticles = async () => {
    const response = await apiGetArticle(id);

    setArticle(response);
    setLoading(false);
  };

  useEffect(() => {
    getArticles();
  }, []);

  return isLoading ? <div>Loading...</div> : <ArticleForm article={article} />;
};

UpdateArticle.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default UpdateArticle;
