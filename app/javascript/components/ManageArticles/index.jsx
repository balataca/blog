import React from 'react';
import { useHistory } from 'react-router-dom';
import ArticlesTable from './ArticlesTable';
import { Button } from './styles';

const ManageArticles = () => {
  const history = useHistory();

  const newArticle = () => {
    history.push('/article/create');
  };

  return (
    <div>
      <ArticlesTable />
      <Button onClick={newArticle}>Add Article</Button>
    </div>
  );
};

export default ManageArticles;
