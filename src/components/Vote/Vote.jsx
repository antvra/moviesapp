import PropTypes from 'prop-types';

const Vote = ({ vote }) => {
  const colorize = (vote) => {
    if (vote < 3) {
      return '#E90000';
    }
    if (vote >= 3 && vote < 5) {
      return '#E97E00';
    }
    if (vote >= 5 && vote < 7) {
      return '#E9D100';
    }
    return ' #66E900';
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
