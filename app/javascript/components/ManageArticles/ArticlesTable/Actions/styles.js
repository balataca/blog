import styled from 'styled-components';
import Button from '../../../Button';

export const Container = styled.div`
  display: flex;
`;

export const DeleteButton = styled(Button)`
  background-color: #ff3d00;
  border-color: #b2102f;
`;

export const EditButton = styled(Button)`
  background-color: #9c27b0;
  border-color: #6d1b7b;
  margin-right: 0.5em;
`;
