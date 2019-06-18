import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class MenuExampleMenus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // activeItem: ''
    }
  }

  handleLogOut = e => {
    e.preventDefault()
    this.props.logout()
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    // console.log('logged in?', this.props.loggedIn)
    // // const { activeItem } = this.state
    // if(this.props.loggedIn) {
    //   return (
    //     <Menu inverted>
    //       <Menu.Item name="faves"><Link to="/">Search</Link></Menu.Item>
    //       {/* <Menu.Item name="faves"><Link to="/faves">Favorites</Link></Menu.Item> */}
    //       <Menu.Item name='logout' onClick={this.handleLogOut}>Log out</Menu.Item>
    //     </Menu>
    //   )
    // }
    // else {
      return (
        <Menu fluid inverted widths={3}>
          <Menu.Item><Icon name="spotify" /><Link to="/">Search</Link></Menu.Item>
        </Menu>
      )
    // }
    
  }
}