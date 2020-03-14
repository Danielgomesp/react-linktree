import React from 'react';
import { Container, Icon, Name } from './styles';

export default function Button({ icon, name, backgroundColor }) {
  return (
    <Container backgroundColor={backgroundColor} >
      <Icon>{icon}</Icon>
      <Name>{name}</Name>
    </Container>
  );
}
