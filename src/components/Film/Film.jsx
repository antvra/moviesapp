import React from 'react';
import { Card, Tag, Col, Rate } from 'antd';
import { format, parseISO } from 'date-fns';
import PropTypes from 'prop-types';
import Vote from '../Vote';
import failureImg from '../../assets/img/imgnotavailable.png';

const Film = ({ title, poster, description, date, vote }) => (
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
          <div className="film__tags">
            <Tag>Action</Tag>
            <Tag>Drama</Tag>
          </div>
          <p className="film__description">{description}</p>
          <Rate count={10} className="film__rate" />
        </div>
      </div>
    </Card>
  </Col>
);
Film.defaultProps = {
  poster: null,
  date: null,
  vote: 0,
};

Film.propTypes = {
  title: PropTypes.string.isRequired,
  vote: PropTypes.number,
  poster: PropTypes.string,
  description: PropTypes.string.isRequired,
  date: PropTypes.string,
};

export default Film;
