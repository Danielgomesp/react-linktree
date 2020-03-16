import React from 'react';
import Button from './index';
import variables from '../../variables';
const img = require('../../images/facebook.svg');

export default {
  title: 'Button',
  component: Button,
};

export function Default() {
  return(
    <Button link='https://www.facebook.com/danielgomesp' icon={img} name="Facebook" backgroundColor={variables.facebookColor} />
  )
}
