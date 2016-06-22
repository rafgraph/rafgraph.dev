import React from 'react';
import { Link } from 'react-router';
import Footer from './Footer';

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
            <li>Project foobar - <Link to="/">link</Link></li>
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
      <Footer />
    </div>
  );
}

export default Code;
