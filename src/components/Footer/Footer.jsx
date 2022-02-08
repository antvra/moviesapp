import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'antd';
import './footer.scss';

const Footer = ({ getFilms, name, total }) => {
  const [currentPage, changeCurrentPage] = useState(1);
  const redirect = (newPage) => {
    changeCurrentPage(newPage);
    getFilms(name, newPage);
  };
  if (!total) {
    return null;
  }
  return (
    <Pagination
      current={currentPage}
      total={total}
      pageSize={20}
      showSizeChanger={false}
      className="footer"
      onChange={redirect}
    />
  );
};

Footer.defaultProps = {
  total: null,
  name: null,
};

Footer.propTypes = {
  total: PropTypes.number,
  name: PropTypes.string,
  getFilms: PropTypes.func.isRequired,
};

export default Footer;
