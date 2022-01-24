import React, { Component } from 'react';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import Loader from '../Loader';
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
    error: false,
  };

  onError = () => {
    this.setState({
      isLoaded: true,
      error: true,
    });
  };

  getFilms() {
    this.MoviesService.getFilms()
      .then((films) => {
        this.setState({
          isLoaded: true,
          items: films.results,
          error: false,
        });
      })
      .catch(this.onError);
  }

  render() {
    const { items, isLoaded, error } = this.state;
    if (!isLoaded) {
      return <Loader />;
    }
    if (error) {
      return <ErrorIndicator />;
    }
    return (
      <div className="moviesapp">
        <Header />
        <FilmList items={items} />
        <Footer />
      </div>
    );
  }
}
