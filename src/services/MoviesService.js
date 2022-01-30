import axios from 'axios';

const baseURL = 'https://api.themoviedb.org';
const apiKEY = 'f2923c661a81f4e8a4fc73f62bc2b0dd';

const instance = axios.create({ baseURL });

export const MovieAPI = {
  searchMovie(searchValue = 'return') {
    return instance
      .get(`/3/search/movie?api_key=${apiKEY}&query=${searchValue}`)
      .then((res) => res)
      .catch((error) => error.response);
  },
};

// export default class MoviesService {
//   api = 'https://api.themoviedb.org/';

//   apiKey = 'f2923c661a81f4e8a4fc73f62bc2b0dd';

//   url = `${this.api}3/search/movie?api_key=${this.apiKey}&query=return`;

//   getFilms = async () => {
//     const res = await fetch(this.url);
//     if (!res.ok) {
//       throw new Error(`Could not fetch ${this.url}, received ${res.status}`);
//     }
//     return res.json();
//   };
// }
