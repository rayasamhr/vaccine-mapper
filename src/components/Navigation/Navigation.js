import React from 'react';
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'semantic-ui-react'
import * as ROUTES from '../../Routes'

export default class Navigation extends React.Component {

  state = { activeItem: 'map' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu borderless stackable size='large'>
        <Menu.Item
          as={Link} to={ROUTES.MAP}
          name='map'
          active={activeItem === 'map'}
          onClick={this.handleItemClick}>
          <Icon name="map marker" />
          Map
        </Menu.Item>
        <Menu.Item
          as={Link} to={ROUTES.FORM}
          name='form'
          active={activeItem === 'form'}
          onClick={this.handleItemClick}
        >
          <Icon name="wordpress forms" />

          Create Vaccination Record
        </Menu.Item>
        <Menu.Item
          // as={Link} to={ROUTES.SIGN_IN}
          name='signIn'
          disabled
          active={activeItem === 'signIn'}
        // onClick={this.handleItemClick}
        >
          <Icon name="sign in" />

          Sign In
        </Menu.Item>
      </Menu>
    );
  }
}