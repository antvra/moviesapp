import React, { Component } from 'react';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import Loader from '../Loader';
import Header from '../Header';
import { MovieAPI } from '../../services/MoviesService';
import FilmList from '../FilmList';
import Footer from '../Footer';

export default class App extends Component {
  state = {
    isLoaded: false,
    items: null,
    error: false,
  };

  componentDidMount() {
    this.getFilms();
  }

  onError = () => {
    this.setState({
      isLoaded: true,
      error: true,
    });
  };

  getFilms() {
    MovieAPI.searchMovie()
      .then((response) => {
        this.setState({
          isLoaded: true,
          items: response.data.results,
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
