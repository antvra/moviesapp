import React from 'react';
import PropTypes from 'prop-types';

const Vote = ({ vote }) => {
  const colorize = (vote) => {
    if (vote >= 5 && vote < 8) {
      return 'yellow';
    }
    if (vote < 5) {
      return 'red';
    }
    return 'green';
  };
  return (
    <div className="film__vote" style={{ border: `2px solid ${colorize(vote)}` }}>
      <h6 className="film__vote--mark">{vote}</h6>
    </div>
  );
};

Vote.defaultProps = {
  vote: 0,
};

Vote.propTypes = {
  vote: PropTypes.number,
};

export default Vote;
