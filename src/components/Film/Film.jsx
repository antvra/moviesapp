import React from 'react';
import { Card, Col, Rate } from 'antd';
import { format, parseISO } from 'date-fns';
import PropTypes from 'prop-types';
import GenreTag from '../GenreTag';
import { GenresConsumer } from '../../context/GenresContext';
import { ClientWidth } from '../../services/ClientWidth';
import Vote from '../Vote';
import failureImg from '../../assets/img/imgnotavailable.png';

const Film = ({ title, poster, description, date, vote, genre }) => {
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
              <Rate count={10} className="film__rate" />
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
          <Rate count={10} className="film__rate" />
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
};

Film.propTypes = {
  title: PropTypes.string.isRequired,
  vote: PropTypes.number,
  poster: PropTypes.string,
  description: PropTypes.string.isRequired,
  date: PropTypes.string,
  genre: PropTypes.arrayOf(PropTypes.number),
};

export default Film;
