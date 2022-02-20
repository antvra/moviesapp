import { Card, Col, Rate } from 'antd';
import { format, parseISO } from 'date-fns';
import PropTypes from 'prop-types';
import GenreTag from '../GenreTag';
import { MovieAPI } from '../../services/MoviesService';
import { GenresConsumer } from '../../context/GenresContext';
import { ClientWidth } from '../../utils/clientWidth';
import Vote from '../Vote';
import failureImg from '../../assets/img/imgnotavailable.png';
import './Film.scss';

const Film = ({ title, poster, description, date, vote, genre, id, sessionID, rating, getRated }) => {
  const width = ClientWidth();
  if (width > 580) {
    return (
      <Col>
        <Card className="film">
          <div className="film__card">
            <div className="film__poster">
              <img
                className="film__poster-img"
                src={poster ? `https://image.tmdb.org/t/p/w500${poster}` : failureImg}
                alt="poster"
                style={!poster ? { objectFit: 'contain' } : null}
              />
            </div>
            <div className="film__info">
              <div className="film__info--header">
                <h5 className="film__title">{title}</h5>
                <Vote vote={vote} />
              </div>
              <h6 className="film__date">{date ? format(parseISO(date), 'd LLLL, yyyy') : 'Unknown'}</h6>
              <GenresConsumer>{(genresList) => <GenreTag genre={genre} genresList={genresList} />}</GenresConsumer>
              <p className="film__description">{description}</p>
              <Rate
                defaultValue={rating}
                count={10}
                allowHalf
                allowClear={false}
                className="film__rate"
                onChange={(value) => {
                  MovieAPI.rateMovie(id, value, sessionID).then(() => setTimeout(() => getRated(), 400));
                }}
              />
            </div>
          </div>
        </Card>
      </Col>
    );
  }
  return (
    <Col>
      <Card className="film">
        <div className="film__card">
          <div className="film__header">
            <div className="film__poster">
              <img
                className="film__poster-img"
                src={poster ? `https://image.tmdb.org/t/p/w500${poster}` : failureImg}
                alt="poster"
                style={!poster ? { objectFit: 'contain' } : null}
              />
            </div>
            <div className="film__info">
              <div className="film__info--header">
                <h5 className="film__title">{title}</h5>
                <Vote vote={vote} />
              </div>
              <h6 className="film__date">{date ? format(parseISO(date), 'd LLLL, yyyy') : 'Unknown'}</h6>
              <GenresConsumer>{(genresList) => <GenreTag genre={genre} genresList={genresList} />}</GenresConsumer>
            </div>
          </div>
          <p className="film__description">{description}</p>
          <Rate
            defaultValue={rating}
            count={10}
            allowHalf
            allowClear={false}
            className="film__rate"
            onChange={(value) => {
              MovieAPI.rateMovie(id, value, sessionID).then(() => setTimeout(() => getRated(), 1000));
            }}
          />
        </div>
      </Card>
    </Col>
  );
};

Film.defaultProps = {
  poster: null,
  date: null,
  vote: 0,
  genre: [],
  rating: 0,
};

Film.propTypes = {
  title: PropTypes.string.isRequired,
  vote: PropTypes.number,
  poster: PropTypes.string,
  description: PropTypes.string.isRequired,
  date: PropTypes.string,
  genre: PropTypes.arrayOf(PropTypes.number),
  id: PropTypes.number.isRequired,
  sessionID: PropTypes.string.isRequired,
  rating: PropTypes.number,
  getRated: PropTypes.func.isRequired,
};

export default Film;
