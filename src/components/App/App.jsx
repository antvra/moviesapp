import React, { Component } from 'react';
import { Tabs, Input } from 'antd';
import debounce from 'lodash.debounce';
import { GenresProvider } from '../../context/GenresContext';
import { MovieAPI } from '../../services/MoviesService';
import FilmList from '../FilmList';
import Footer from '../Footer';

const { TabPane } = Tabs;

export default class App extends Component {
  state = {
    isLoaded: true,
    items: null,
    error: false,
    name: '',
    page: null,
    total: null,
    rated: [],
    totalRated: null,
    tab: 'Search',
  };

  genresList = null;

  sessionID = '';

  sendRequest = debounce((value) => {
    this.getFilms(value);
  }, 1000);

  componentDidMount() {
    MovieAPI.getGenres().then((list) => {
      this.genresList = list.data.genres;
    });
    MovieAPI.createSession().then((response) => {
      this.sessionID = response.data.guest_session_id;
    });
  }

  onChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
    this.sendRequest(event.target.value);
  };

  onError = () => {
    this.setState({
      error: true,
    });
  };

  getRated = () => {
    MovieAPI.getRated(this.sessionID).then((response) =>
      this.setState({ rated: response.data.results, totalRated: response.data.total_results })
    );
  };

  getFilms = (value, page = 1) => {
    if (value === '') {
      this.setState({ isLoaded: true, items: null, error: false, name: '', page: null });
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
    const { items, isLoaded, error, name, page, total, rated, tab, totalRated } = this.state;
    return (
      <GenresProvider value={this.genresList}>
        <div className="moviesapp">
          <Tabs defaultActiveKey="1" centered destroyInactiveTabPane>
            <TabPane tab="Search" key="1">
              <Input placeholder="Type to search..." onChange={this.onChangeInput} value={name} className="header" />
              <FilmList
                items={items}
                isLoaded={isLoaded}
                error={error}
                sessionID={this.sessionID}
                rated={rated}
                tab={tab}
                getRated={this.getRated}
              />
              <Footer page={page} total={total} name={name} getFilms={this.getFilms} />
            </TabPane>
            <TabPane tab="Rated" key="2">
              <FilmList
                items={rated}
                isLoaded={isLoaded}
                error={error}
                sessionID={this.sessionID}
                rated={rated}
                tab={tab}
                getRated={this.getRated}
              />
              <Footer page={page} total={totalRated} name={name} getFilms={this.getFilms} />
            </TabPane>
          </Tabs>
        </div>
      </GenresProvider>
    );
  }
}
