import React from 'react';
import { Card, Tag } from 'antd';
import { format, parseISO } from 'date-fns';
import PropTypes from 'prop-types';
import failureImg from '../../assets/img/imgnotavailable.png';

const Film = ({ title, poster, description, date }) => (
  <Card className="film">
    <div className="film__card">
      <div className="film__poster">
        <img
          className="film__poster-img"
          src={poster ? `https://image.tmdb.org/t/p/w500${poster}` : failureImg}
          alt="poster"
        />
      </div>
      <div className="film__info">
        <h5 className="film__title">{title}</h5>
        <h6 className="film__date">{date ? format(parseISO(date), 'd LLLL, yyyy') : 'Unknown'}</h6>
        <div className="film__tags">
          <Tag>Action</Tag>
          <Tag>Drama</Tag>
        </div>
        <p className="film__description">{description}</p>
      </div>
    </div>
  </Card>
);

Film.defaultProps = {
  poster: null,
  date: null,
};

Film.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string,
  description: PropTypes.string.isRequired,
  date: PropTypes.string,
};

export default Film;
