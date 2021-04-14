import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { apiCreateArticle, apiUpdateArticle } from '../../services/api';
import Button from '../Button';

import {
  Container,
  Form,
  InputBlock,
  Label,
  Input,
  FileInput,
  TextArea,
} from './styles';

const ArticleForm = ({ article }) => {
  const history = useHistory();
  const createOrUpdate = article.id ? apiUpdateArticle : apiCreateArticle;
  const [state, setState] = useState({
    title: article.title,
    subtitle: article.subtitle,
    body: article.body,
    image: '',
  });

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e) => {
    setState({ ...state, image: e.target.files[0] });
  };

  const createFormData = () => {
    const formData = new FormData();
    const {
      title,
      subtitle,
      body,
      image,
    } = state;

    formData.append('title', title);
    formData.append('subtitle', subtitle);
    formData.append('body', body);
    formData.append('image', image);

    return formData;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = createFormData();
    const token = document.querySelector('meta[name="csrf-token"]').content;
    const response = await createOrUpdate({ token, id: article.id, formData });

    if (response) {
      history.push('/manage');
    }
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <InputBlock>
          <Label htmlFor="title">
            Title
          </Label>
          <Input
            name="title"
            id="title"
            required
            value={state.title}
            onChange={onChange}
          />
        </InputBlock>
        <InputBlock>
          <Label htmlFor="subtitle">
            Subtitle
          </Label>
          <Input
            name="subtitle"
            id="subtitle"
            required
            value={state.subtitle}
            onChange={onChange}
          />
        </InputBlock>
        <InputBlock>
          <Label htmlFor="body">
            Content
          </Label>
          <TextArea
            name="body"
            id="body"
            required
            value={state.body}
            onChange={onChange}
            rows="5"
            cols="33"
          />
        </InputBlock>
        <InputBlock>
          <Label htmlFor="image">
            Image
          </Label>
          <FileInput
            type="file"
            name="image"
            id="image"
            accept="image/*"
            onChange={handleFileUpload}
          />
        </InputBlock>
        <Button type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

ArticleForm.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    title: PropTypes.string,
    subtitle: PropTypes.string,
    body: PropTypes.string,
  }),
};

ArticleForm.defaultProps = {
  article: {
    id: '',
    title: '',
    subtitle: '',
    body: '',
  },
};

export default ArticleForm;
