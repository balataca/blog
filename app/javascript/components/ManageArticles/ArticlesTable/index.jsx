import React, { useEffect, useState } from 'react';
import { apiGetLocalArticles } from '../../../services/api';
import Actions from './Actions';

import {
  Table,
  TableHeadCell,
  TableCell,
} from './styles';

const ArticlesTable = () => {
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    const response = await apiGetLocalArticles();
    setArticles(response);
  };

  useEffect(() => {
    getArticles();
  }, []);

  const removeArticle = (id) => {
    const filteredArticles = articles.filter((article) => article.id !== id);

    setArticles(filteredArticles);
  };

  return (
    <Table>
      <thead>
        <tr>
          <TableHeadCell>Title</TableHeadCell>
          <TableHeadCell>Subtitle</TableHeadCell>
          <TableHeadCell>Created At</TableHeadCell>
          <TableHeadCell>Actions</TableHeadCell>
        </tr>
      </thead>
      <tbody>
        {articles.map((article) => (
          <tr key={article.id}>
            <TableCell>{article.title}</TableCell>
            <TableCell>{article.subtitle}</TableCell>
            <TableCell>{article.created_at}</TableCell>
            <TableCell>
              <Actions id={article.id} removeArticle={removeArticle} />
            </TableCell>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ArticlesTable;
