import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";
import LocaleDate from '../../LocaleDate';

import {
  Container,
  Header,
  Title,
  Image,
} from './styles';

const ArticleItem = ({ article }) => {
  const history = useHistory();

  const openArticle = () => {
    history.push(`/articles/${article.id}`);
  };

  return (
    <Container onClick={openArticle}>
      <Header>
        <Title>{article.title}</Title>
        <LocaleDate date={article.created_at} />
      </Header>
      <Image src={article.image_url} aria-label="wristwatch" />
    </Container>
  );
};

ArticleItem.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
};

export default ArticleItem;
