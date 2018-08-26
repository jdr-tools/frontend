import React, { Component } from 'react'
import { BrowserRouter } from "react-router-dom"

import Menu from "./components/Menu.jsx"
import Content from "./components/Content.jsx"

export default class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/admin">
        <div className="content-wrapper">
          <Menu></Menu>
          <Content></Content>
        </div>
      </BrowserRouter>
    );
  }
}