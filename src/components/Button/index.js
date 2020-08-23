import React from 'react';

import './index.scss';

const Button = ({ children, loading, ...props }) => (
  <button className='button' disabled={loading} {...props}>
    {loading ? 'Loading...' : children}
  </button>
);

Button.defaultProps = {
  loading: false,
};

export default Button;
