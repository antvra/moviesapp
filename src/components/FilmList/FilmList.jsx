import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'antd';
import Loader from '../Loader';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import Film from '../Film';

const FilmList = ({ items, isLoaded, error }) => {
  if (error) {
    return (
      <Row className="filmlist">
        <ErrorIndicator type={1} />
      </Row>
    );
  }

  if (!isLoaded) {
    return (
      <Row className="filmlist">
        <Loader />
      </Row>
    );
  }

  if (isLoaded && items) {
    if (!items.length) {
      return (
        <Row className="filmlist">
          <ErrorIndicator type={2} />
        </Row>
      );
    }
    return (
      <Row className="filmlist" gutter={[32, 32]}>
        {items.map((item) => (
          <Film
            key={item.id}
            title={item.title}
            poster={item.poster_path}
            description={item.overview}
            date={item.release_date}
            vote={item.vote_average}
            genre={item.genre_ids}
          />
        ))}
      </Row>
    );
  }
  return <Row className="filmlist" />;
};

FilmList.defaultProps = {
  items: [],
  isLoaded: false,
  error: false,
};

FilmList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  isLoaded: PropTypes.bool,
  error: PropTypes.bool,
};

export default FilmList;
