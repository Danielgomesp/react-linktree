import React from 'react';
import { Container, Icon, Name } from './styles';

export default function Button({ icon, name, backgroundColor, link }) {
  function handleClick(link) {

  }

  return (
    <Container backgroundColor={backgroundColor} href={link} target='_blank'>
      <Icon>{icon}</Icon>
      <Name>{name}</Name>
    </Container>
  );
}
