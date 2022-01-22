import React, { Component } from 'react';
import { Menu, Input } from 'antd';

export default class Header extends Component {
  state = {};

  render() {
    return (
      <header className="header">
        <Menu selectedKeys="Search" mode="horizontal" className="menu">
          <Menu.Item key="Search">Search</Menu.Item>
          <Menu.Item key="Rated">Rated</Menu.Item>
        </Menu>
        <Input placeholder="Type to search..." />
      </header>
    );
  }
}
