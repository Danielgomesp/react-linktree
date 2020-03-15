import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: grid;
  grid-template-rows: 3fr 1fr 1fr;
  justify-content: center;
  text-align: center;
  width: 100%;
`;

export const Picture = styled.div`
  background-image: url( ${ ({ background }) => background});
  background-size: cover;
  border-radius: 50%;
  height: 130px;
  margin: 0 auto;
  width: 130px;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  font-family: sans-serif;
`

export const Subtitle = styled.p`
  font-size: 1em;
  font-family: sans-serif
`
