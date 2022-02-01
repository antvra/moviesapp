import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'antd';

const ErrorIndicator = ({ type }) => {
  if (type === 1) {
    return (
      <div className="loader">
        <Alert
          message="Something went wrong"
          description="An error has occurred in our service. We are already solving this problem."
          type="error"
        />
      </div>
    );
  }
  return (
    <div className="loader">
      <Alert message="No results" description="Try to find something else" type="warning" />
    </div>
  );
};

ErrorIndicator.defaultProps = {
  type: 1,
};

ErrorIndicator.propTypes = {
  type: PropTypes.number,
};

export default ErrorIndicator;
