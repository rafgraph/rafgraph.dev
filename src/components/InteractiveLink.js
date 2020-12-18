import React from 'react';
import PropTypes from 'prop-types';
import Interactive from 'react-interactive';

export default function InteractiveLink({ href, children, newWindow }) {
  return (
    <Interactive
      as="a"
      href={href}
      style={{
        borderBottom: '1px dotted rgb(0, 168, 0)',
        boxSizing: 'border-box',
      }}
      hover={{ borderBottom: '1px solid rgb(0, 168, 0)' }}
      active="hover"
      focusFromTab={{
        color: 'black',
        backgroundColor: 'rgba(0, 168, 0, 0.1)',
        padding: '2px 4px 1px',
        margin: '-4px -6px -3px',
        borderRadius: '2px',
        border: '2px solid rgb(0, 168, 0)',
      }}
      touchActiveTapOnly
      target={(newWindow || null) && '_blank'}
      rel={(newWindow || null) && 'noopener noreferrer'}
    >
      {children}
    </Interactive>
  );
}

InteractiveLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  newWindow: PropTypes.bool,
};

InteractiveLink.defaultProps = {
  newWindow: true,
};
