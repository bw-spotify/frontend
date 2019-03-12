import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleMenus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeItem: ''
    }
  }

  handleLogOut = e => {
    e.preventDefault()
    this.props.logout()
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    console.log('logged in?', this.props.loggedIn)
    const { activeItem } = this.state
    let menuItems
    if(this.props.loggedIn) {
      menuItems = <Menu.Item name='logout' onClick={this.handleLogOut}>Log out</Menu.Item>
    }
    else {
      menuItems = <Menu.Item><img src='https://react.semantic-ui.com/logo.png' /></Menu.Item>
    }
    return (
      <Menu inverted>
        {menuItems}
      </Menu>
    )
  }
}