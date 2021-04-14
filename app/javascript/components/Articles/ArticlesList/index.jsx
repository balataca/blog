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
  })).isRequired,
};

export default ArticlesList;
