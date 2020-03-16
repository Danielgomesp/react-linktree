import styled from 'styled-components';
import variables from '../../variables';
import { lighten } from 'polished';

export const Container = styled.a`
  align-items: center;
  background: ${ (props) => props.backgroundColor ? props.backgroundColor : variables.opt1Color};
  border-radius: 3px;
  display: flex;
  flex-flow: row;
  justify-content: center;
  margin: 10px auto;
  text-decoration: none;
  width: 100%;
  
  &:hover {
    background: ${ (props) => lighten('0.1', props.backgroundColor)};
    cursor: pointer;
  }
}
`;

export const Icon = styled.img`
  height: 20px;
  margin: 0 5px;
  padding: 5px;
`;

export const Name = styled.p`
  color: ${variables.textColor};
  padding: 20px 0;
`;
