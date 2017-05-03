import React from 'react';
import PropTypes from 'prop-types';
import Interactive from 'react-interactive';

export default function InteractiveLink({ href, children, newWindow }) {
  return (
    <Interactive
      as="a"
      href={href}
      style={{ borderBottom: '1px dotted rgb(0, 168, 0)' }}
      hover={{ borderBottom: '1px solid rgb(0, 168, 0)' }}
      active="hover"
      touchActive={{ borderBottom: '1px dashed rgb(0, 168, 0)' }}
      focusFromTab={{
        color: 'black',
        backgroundColor: 'rgba(0, 168, 0, 0.3)',
        padding: '2px 4px 1px',
        margin: '-2px -4px -1px',
        borderRadius: '2px',
        borderBottom: '1px solid transparent',
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
