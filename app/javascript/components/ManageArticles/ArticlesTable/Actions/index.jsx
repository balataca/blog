import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { apiDeleteArticle } from '../../../../services/api';

import {
  Container,
  DeleteButton,
  EditButton,
} from './styles';

const Actions = ({ id, removeArticle }) => {
  const history = useHistory();

  const deleteArticle = async () => {
    const token = document.querySelector('meta[name="csrf-token"]').content;
    const response = await apiDeleteArticle(token, id);

    if (response.message) {
      removeArticle(id);
    }
  };

  const editArticle = async () => {
    history.push(`/article/edit/${id}`);
  };

  return (
    <Container>
      <EditButton
        onClick={editArticle}
      >
        Edit
      </EditButton>
      <DeleteButton
        onClick={deleteArticle}
      >
        Delete
      </DeleteButton>
    </Container>
  );
};

Actions.propTypes = {
  id: PropTypes.number.isRequired,
  removeArticle: PropTypes.func.isRequired,
};

export default Actions;
