import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'antd';
import Film from '../Film';

const FilmList = ({ items }) => (
  <Row className="filmlist">
    {items.map((item) => (
      <Film
        key={item.poster_path}
        title={item.title}
        poster={item.poster_path}
        description={item.overview}
        date={item.release_date}
      />
    ))}
  </Row>
);

FilmList.defaultProps = {
  items: [],
};

FilmList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default FilmList;
