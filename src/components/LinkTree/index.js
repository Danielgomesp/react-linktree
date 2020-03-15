import React from 'react';
import { Container } from './styles';
import Button from '../Button';
import variables from '../../variables';
import Header from '../Header';

export default function LinkTree() {
  return (
    <Container>
      <Header picture='https://scontent.fgvr2-1.fna.fbcdn.net/v/t31.0-8/p960x960/13710496_10209793534625506_2997078028056513758_o.jpg?_nc_cat=107&_nc_sid=7aed08&_nc_ohc=CT0MJiwW7cYAX-DuiSm&_nc_ht=scontent.fgvr2-1.fna&_nc_tp=6&oh=f10204fc396130e703c690b8be97f3c2&oe=5E94D2C2' title='Daniel Gomes Pereira' subtitle='A Brazilian Frontend Developer' />
      <Button link='https://www.facebook.com/danielgomesp' icon='💯' name='Facebook' backgroundColor={variables.facebookColor} />
      <Button link='https://www.instagram.com/danielgomesp/' icon='💯' name='Instagram' backgroundColor={variables.instagramColor} />
      <Button link='https://www.youtube.com/channel/UCrVYzSKkbkJuCtXFIPAc1LA?view_as=subscriber' icon='😀' name='Youtube' backgroundColor={variables.youtubeColor} />
      <Button link='https://github.com/Danielgomesp' icon='😀' name='Github' backgroundColor={variables.githubColor} />
      <Button link='https://wa.me/5533999640132' icon='💯' name='Whatsapp' backgroundColor={variables.whatsappColor} />
      <Button link='https://github.com/Danielgomesp' icon='😀' name='Site Oficial' backgroundColor={variables.opt2Color} />
      <Button link='https://www.linkedin.com/in/danielgomesp/' icon='😀' name='LinkedIn' backgroundColor={variables.linkedinColor} />
      <Button link='https://twitter.com/danielgoper' icon='😀' name='Twitter' backgroundColor={variables.twitterColor} />
    </Container>
  )
}