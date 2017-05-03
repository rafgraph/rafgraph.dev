import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer
      style={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: 'inherit',
        textAlign: 'center',
        fontSize: '18px',
        padding: '2px 0 3px 0',
      }}
    >
      <Link to="/" style={{ width: '100%', display: 'block' }}>close</Link>
    </footer>
  );
}

export default Footer;
