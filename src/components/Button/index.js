import React from 'react';
import { Container, Icon, Name } from './styles';

export default function Button({ icon, name, backgroundColor, link }) {
  return (
    <Container backgroundColor={backgroundColor} href={link} target='_blank'>
      <Icon src={icon} />
      <Name>{name}</Name>
    </Container>
  );
}
