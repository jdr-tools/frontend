import React, { Component } from 'react'
import { Route } from "react-router-dom"

import Groups from './Groups.jsx'
import Services from './Services.jsx'

export default class Content extends Component {
  render () {
    return (
      <div className="content">
        <Route path="/services" component={Services} />
        <Route path="/groups" component={Groups} />
      </div>
    )
  }
}