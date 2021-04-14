import styled from 'styled-components';

export const Container = styled.article`
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr 600px;
  grid-auto-rows: 20em;
  margin-bottom: 2em;
`;

export const Header = styled.header`
  margin-right: 1em;
`;

export const Title = styled.h1`
  margin-bottom: 1em;
  font-size: 1.5em;
  line-height: 1.2em;
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ src }) => src});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 100%;
`;
