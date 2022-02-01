import React, { Component } from 'react';
import Header from '../Header';
import { MovieAPI } from '../../services/MoviesService';
import FilmList from '../FilmList';
import Footer from '../Footer';

export default class App extends Component {
  state = {
    isLoaded: true,
    items: null,
    error: false,
    name: null,
    page: null,
    total: null,
  };

  onError = () => {
    this.setState({
      error: true,
    });
  };

  getFilms = (value, page = 1) => {
    if (value === '') {
      this.setState({ isLoaded: true, items: null, error: false, name: null, page: null, total: null });
    } else {
      this.setState({ isLoaded: false });
      MovieAPI.searchMovie(value, page)
        .then((response) => {
          this.setState({
            isLoaded: true,
            items: response.data.results,
            error: false,
            name: value,
            page,
            total: response.data.total_results,
          });
        })
        .catch(this.onError);
    }
  };

  render() {
    const { items, isLoaded, error, name, page, total } = this.state;
    return (
      <div className="moviesapp">
        <Header getFilms={this.getFilms} />
        <FilmList items={items} isLoaded={isLoaded} error={error} />
        <Footer page={page} total={total} name={name} getFilms={this.getFilms} />
      </div>
    );
  }
}
