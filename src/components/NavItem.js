import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Interactive from 'react-interactive';

export default function NavItem({
  backgroundColor,
  focusBackgroundColor,
  to,
  href,
  onClick,
  children,
}) {
  return (
    <Interactive
      as={to ? Link : 'a'}
      to={to}
      href={href}
      onClick={onClick}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor,
      }}
      hover={{ color: 'rgb(0, 168, 0)' }}
      active="hover"
      focusFromTab={{ backgroundColor: focusBackgroundColor }}
      touchActiveTapOnly
    >
      {children}
    </Interactive>
  );
}

NavItem.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  focusBackgroundColor: PropTypes.string.isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

NavItem.defaultProps = {
  onClick: null,
};
