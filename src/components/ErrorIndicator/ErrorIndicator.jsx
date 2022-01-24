import React from 'react';
import { Alert } from 'antd';

const ErrorIndicator = () => (
  <div className="loader">
    <Alert
      message="Something went wrong"
      description="An error has occurred in our service. We are already solving this problem."
      type="error"
    />
  </div>
);

export default ErrorIndicator;
