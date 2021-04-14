import React from 'react';
import PropTypes from 'prop-types';
import ArticleItem from '../ArticleItem';

const ArticlesList = ({ articles }) => (
  <>
    {articles.map((article) => (
      <ArticleItem key={article.id} article={article} />
    ))}
  </>
);

ArticlesList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
  })).isRequired,
};

export default ArticlesList;
