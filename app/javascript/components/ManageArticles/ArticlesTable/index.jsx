import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { apiGetLocalArticles, apiDeleteArticle } from '../../../services/api';
import {
  Table,
  TableHeadCell,
  TableCell,
  DeleteButton,
  EditButton,
  Actions,
} from './styles';

const ArticlesTable = () => {
  const history = useHistory();
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

  const deleteArticle = async (id) => {
    const token = document.querySelector('meta[name="csrf-token"]').content;

    const response = await apiDeleteArticle(token, id);

    if (response.message) {
      removeArticle(id);
    }
  };

  const editArticle = async (id) => {
    history.push(`/article/edit/${id}`);
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
              <Actions>
                <EditButton
                  onClick={() => editArticle(article.id)}
                >
                  Edit
                </EditButton>
                <DeleteButton
                  onClick={() => deleteArticle(article.id)}
                >
                  Delete
                </DeleteButton>
              </Actions>
            </TableCell>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ArticlesTable;
