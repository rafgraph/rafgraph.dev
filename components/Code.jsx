import React from 'react';
import { Link } from 'react-router';

function Code() {
  return (
    <div style={{ height: '100%', backgroundColor: 'inherit' }}>
      <div
        style={{
          minHeight: '100%',
          backgroundColor: 'inherit',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ margin: '5vh 5vw 15vh 5vw' }}>
          <h1 style={{ fontSize: '32px' }}>Code</h1>
          <ul>
            <li>Project foobar</li>
            <li>Project foobar</li>
            <li>Project foobar</li>
            <li>Project foobar</li>
            <li>Project foobar</li>
            <li>Project foobar</li>
            <li>Project foobar</li>
            <li>Project foobar</li>
            <li>Project foobar</li>
            <li>Project foobar</li>
            <li>Project foobar</li>
            <li>Project foobar</li>
            <li>Project foobar</li>
            <li>Project foobar</li>
            <li>Project foobar</li>
            <li>Project foobar</li>
          </ul>
        </div>
      </div>
      <footer
        style={{
          position: 'fixed',
          bottom: '0',
          width: '100%',
          backgroundColor: 'inherit',
          textAlign: 'center',
          fontSize: '18px',
          padding: '2px 0 3px 0',
        }}
      >
        <Link to="/" style={{ marginBottom: '5vh' }}>close</Link>
      </footer>
    </div>
  );
}

export default Code;
