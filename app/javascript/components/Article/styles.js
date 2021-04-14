import styled from 'styled-components';

export const Image = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${({ src }) => src});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const Title = styled.h1`
  margin-top: 1.5em;
  margin-bottom: 0.5em;
  font-size: 2em;
`;

export const Subtitle = styled.div`
  font-size: 1.5em;
  color: #616161;
`;

export const Body = styled.p`
  margin: 4em 0;
`;
