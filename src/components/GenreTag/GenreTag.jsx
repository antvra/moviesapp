import React from 'react';
import PropTypes from 'prop-types';
import { Tag } from 'antd';

const GenreTag = ({ genre, genresList }) => (
  <div className="film__tags">
    {genre.map((el) => (
      <Tag key={el}>
        {genresList.map((obj) => {
          if (obj.id === el) {
            return obj.name;
          }
          return null;
        })}
      </Tag>
    ))}
  </div>
);

GenreTag.propTypes = {
  genre: PropTypes.arrayOf(PropTypes.number).isRequired,
  genresList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GenreTag;
