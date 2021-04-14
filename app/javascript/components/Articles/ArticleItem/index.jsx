import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import LocaleDate from '../../LocaleDate';

import {
  Container,
  Header,
  Title,
  Subtitle,
  Image,
} from './styles';

const ArticleItem = ({ article }) => {
  const history = useHistory();

  const openArticle = () => {
    if (article.url) {
      window.location.href = article.url;
    } else {
      history.push(`/articles/${article.id}`);
    }
  };

  return (
    <Container onClick={openArticle}>
      <Header>
        <Title>{article.title}</Title>
        <Subtitle>{article.subtitle}</Subtitle>
        <LocaleDate date={article.created_at} />
      </Header>
      <Image src={article.image_url} aria-label="wristwatch" />
    </Container>
  );
};

ArticleItem.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    image_url: PropTypes.string,
    created_at: PropTypes.string.isRequired,
    url: PropTypes.string,
  }).isRequired,
};

export default ArticleItem;
