export default class MoviesService {
  api = 'https://api.themoviedb.org/';

  apiKey = 'f2923c661a81f4e8a4fc73f62bc2b0dd';

  url = `${this.api}3/search/movie?api_key=${this.apiKey}&query=return`;

  getFilms = async () => {
    const res = await fetch(this.url);
    if (!res.ok) {
      throw new Error(`Could not fetch ${this.url}, received ${res.status}`);
    }
    return res.json();
  };
}
