import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

export default class Menu extends Component {
  render () {
    return (
      <AppBar color="default" position="absolute">  
        <Toolbar>
          <Typography variant="title">JDR Tools&nbsp;</Typography>
          <Button href="/admin/services">Services</Button>
          <Button href="/admin/groups">Groupes</Button>
        </Toolbar>
      </AppBar>
    )
  }
}