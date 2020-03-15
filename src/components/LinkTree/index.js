import React from 'react';
import { Container } from './styles';
import Button from '../Button';
import variables from '../../variables';
import Header from '../Header';
import profilePicture from '../../images/DanielsPicture.jpg';

export default function LinkTree() {
  return (
    <Container>
      <Header picture='foto' title='Your Title Goes Here' subtitle='And here is your subtitle or any additional text' />
      <Button link='https://github.com/Danielgomesp' icon='💯' name='Facebook' backgroundColor={variables.facebookColor} />
      <Button link='https://www.instagram.com/danielgomesp/' icon='💯' name='Instagram' backgroundColor={variables.instagramColor} />
      <Button link='https://github.com/Danielgomesp' icon='😀' name='Youtube' backgroundColor={variables.youtubeColor} />
      <Button link='https://github.com/Danielgomesp' icon='😀' name='Blog' backgroundColor={variables.blogColor} />
      <Button link='https://github.com/Danielgomesp' icon='💯' name='Whatsapp' backgroundColor={variables.whatsappColor} />
      <Button link='https://github.com/Danielgomesp' icon='😀' name='Site Oficial' backgroundColor={variables.opt2Color} />
      <Button link='https://github.com/Danielgomesp' icon='😀' name='LinkedIn' backgroundColor={variables.linkedinColor} />
      <Button link='https://github.com/Danielgomesp' icon='😀' name='Twitter' backgroundColor={variables.twitterColor} />
    </Container>
  )
}