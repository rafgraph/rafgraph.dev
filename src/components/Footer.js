import React from 'react';
import { Link } from 'react-router-dom';
import Interactive from 'react-interactive';

export default function Footer() {
  return (
    <footer
      style={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: 'inherit',
        textAlign: 'center',
        fontSize: '18px',
      }}
    >
      <Interactive
        as={Link}
        to="/"
        style={{
          width: '100%',
          display: 'block',
          padding: '2px 0 3px 0',
          boxSizing: 'border-box',
        }}
        hover={{ color: 'rgb(0, 168, 0)' }}
        active="hover"
        focusFromTab={{
          backgroundColor: 'rgba(0, 168, 0, .1)',
          border: '2px solid rgb(0, 168, 0)',
          padding: '2px 0 1px 0',
        }}
        touchActiveTapOnly
      >
        close
      </Interactive>
    </footer>
  );
}
