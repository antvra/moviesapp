import axios from 'axios';

const baseURL = 'https://api.themoviedb.org';
const apiKEY = 'f2923c661a81f4e8a4fc73f62bc2b0dd';

const instance = axios.create({ baseURL });

export const MovieAPI = {
  async searchMovie(searchValue, page) {
    try {
      const res = await instance.get(`/3/search/movie?api_key=${apiKEY}&query=${searchValue}&page=${page}`);
      return res;
    } catch (error) {
      return error.response;
    }
  },
  async getGenres() {
    try {
      const res = await instance.get(`/3/genre/movie/list?api_key=${apiKEY}`);
      return res;
    } catch (error) {
      return error.response;
    }
  },
  async createSession() {
    try {
      const res = await instance.get(`/3/authentication/guest_session/new?api_key=${apiKEY}`);
      return res;
    } catch (error) {
      return error.response;
    }
  },
  async rateMovie(id, value, sessionID) {
    try {
      const res = await instance.post(`/3/movie/${id}/rating?api_key=${apiKEY}&guest_session_id=${sessionID}`, {
        value,
      });
      return res;
    } catch (error) {
      return error.response;
    }
  },
  async getRated(sessionID) {
    try {
      const res = await instance.get(`/3/guest_session/${sessionID}/rated/movies?api_key=${apiKEY}`);
      return res;
    } catch (error) {
      return error.response;
    }
  },
};
