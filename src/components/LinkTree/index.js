import React from 'react';
import './styles';
import Button from '../Button';
import variables from '../../variables';


export default function LinkTree() {
  return(
    <>
    <Button icon='👍' name='Facebook' backgroundColor={variables.facebookColor} />
    <Button icon='💯' name='Instagram' backgroundColor={variables.instagramColor} />
    <Button icon='😀' name='Youtube' backgroundColor={variables.youtubeColor} />
    <Button icon='😀' name='Blog' backgroundColor={variables.blogColor} />
    <Button icon='💯' name='Whatsapp' backgroundColor={variables.whatsappColor} />
    <Button icon='😀' name='Site Oficial' backgroundColor={variables.opt2Color} />
    <Button icon='😀' name='LinkedIn' backgroundColor={variables.linkedinColor} />
    <Button icon='😀' name='Twitter' backgroundColor={variables.twitterColor} />
  </>
  )
}