import React from 'react';
import Header from './index';

export default {
  title: 'Header',
  component: Header,
};

export function Default() {
  return(
    <Header picture='oi' title='Your Title Goes Here' subtitle='And here is your subtitle or any additional text' />
  )
}
