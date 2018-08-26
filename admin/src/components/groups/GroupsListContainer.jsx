import React, { Component } from 'react'
import $ from "jquery"

import GroupsList from "./GroupsList.jsx"

/**
 * Component to request the list of groups and pass it to the corresponding presentation.
 * @author Vincent Courtois <courtois.vincent@outlook.com>
 */
export default class GroupsListContainer extends Component {
  constructor () {
    super()
    this.state = {groups: []}
  }

  componentDidMount () {
    const options = {
      method: "post",
      headers: {
        X_CSRF_TOKEN: $('input[name=_csrf]').val()
      },
      body: JSON.stringify({
        url: '/groups',
        method: 'GET',
        session_id: localStorage.getItem("ngStorage-token").replace(/"/g, "")
      })
    }
    fetch("/api", options)
      .then(result => result.json())
      .then(result => result.items)
      .then(groups => this.setState({ groups }))
  }

  render () {
    return (
      <GroupsList groups={this.state.groups}></GroupsList>
    )
  }
}