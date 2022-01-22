import React, { Component } from 'react';
import MoviesService from '../../services/MoviesService';
import Header from '../Header';
import FilmList from '../FilmList';
import Footer from '../Footer';

export default class App extends Component {
  MoviesService = new MoviesService();

  constructor() {
    super();
    this.getFilms();
  }

  state = {
    isLoaded: false,
    items: null,
  };

  getFilms() {
    this.MoviesService.getFilms().then((films) => {
      this.setState({
        isLoaded: true,
        items: films.results,
      });
    });
  }

  render() {
    const { items, isLoaded } = this.state;
    if (!isLoaded) {
      return <h1>Waiting</h1>;
    }
    return (
      <>
        <Header />
        <FilmList items={items} />
        <Footer />
      </>
    );
  }
}
