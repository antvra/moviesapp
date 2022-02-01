import React, { Component } from 'react';
import { Menu, Input } from 'antd';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

export default class Header extends Component {
  static propTypes = {
    getFilms: PropTypes.func.isRequired,
  };

  state = {
    value: '',
  };

  onChangeInput = (event) => {
    const { getFilms } = this.props;
    this.setState({
      value: event.target.value,
    });
    const debounced = debounce((value) => getFilms(value), 500);

    debounced(event.target.value);
  };

  render() {
    const { value } = this.state;
    return (
      <header className="header">
        <Menu selectedKeys="Search" mode="horizontal" className="menu">
          <Menu.Item key="Search">Search</Menu.Item>
          <Menu.Item key="Rated">Rated</Menu.Item>
        </Menu>
        <Input placeholder="Type to search..." onChange={this.onChangeInput} value={value} />
      </header>
    );
  }
}
