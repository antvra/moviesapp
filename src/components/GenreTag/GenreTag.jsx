import PropTypes from 'prop-types';
import { Tag } from 'antd';

const GenreTag = ({ genre, genresList }) => {
  const genres = genresList.reduce((acc, el) => {
    acc[el.id] = el.name;
    return acc;
  }, {});
  return (
    <div className="film__tags">
      {genre.map((el) => (
        <Tag key={el}>{genres[el]}</Tag>
      ))}
    </div>
  );
};

GenreTag.propTypes = {
  genre: PropTypes.arrayOf(PropTypes.number).isRequired,
  genresList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GenreTag;
