import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { apiGetArticle } from '../../services/api';
import LocaleDate from '../LocaleDate';

import {
  Image,
  Title,
  Subtitle,
  Body,
} from './styles';

const Article = ({ match }) => {
  const { id } = match.params;
  const [article, setArticle] = useState({});

  const getArticles = async () => {
    const response = await apiGetArticle(id);
    setArticle(response);
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <article>
      <Image src={article.image_url} aria-label="wristwatch" />
      <Title>{article.title}</Title>
      <Subtitle>{article.subtitle}</Subtitle>
      <Body>{article.body}</Body>
      <LocaleDate date={article.created_at} />
    </article>
  );
};

Article.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Article;
