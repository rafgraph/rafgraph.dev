import React from 'react';
import PropTypes from 'prop-types';

export default function Li({ margin, children }) {
  return (
    <li
      style={{
        listStyle: 'none',
        paddingLeft: '22px',
        textIndent: '-19px',
        margin,
      }}
    >
      <span style={{ paddingRight: '10px' }}>&ndash;</span>
      {children}
    </li>
  );
}

Li.propTypes = {
  margin: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Li.defaultProps = {
  margin: '5px 0',
};
