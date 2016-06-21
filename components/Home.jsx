import React from 'react';
import { Link } from 'react-router';

function Home() {
  return (
    <nav style={{ height: '100%', fontSize: '15vmin', letterSpacing: '0.025em' }}>
      <Link
        to="/code" id="code"
        style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          height: '33%',
          backgroundColor: '#E0E0E0',
        }}
      >
        Code
      </Link>
      <Link
        to="/" id="photography"
        style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          height: '33%',
          backgroundColor: '#D0D0D0',
        }}
      >
        Photography
      </Link>
      <Link
        to="/contact" id="contact"
        style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          height: '34%',
          backgroundColor: '#C0C0C0',
        }}
      >
        Contact
      </Link>
    </nav>
  );
}

export default Home;
