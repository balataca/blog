import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 10em;
`;

export const Title = styled.h1`
  font-size: 1.2em;
`;

export const Form = styled.form`
  margin-top: 30px;
`;

export const InputBlock = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  color: #acacac;
  font-size: 14px;
  font-weight: bold;
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  height: 32px;
  color: #666;
  border: 0;
  border-bottom: 2px solid #eee;
`;

export const FileInput = styled(Input)`
  border: 0;
`;

export const TextArea = styled.textarea`
  width: 100%;
  color: #666;
  border: 0;
  border-bottom: 2px solid #eee;
`;
