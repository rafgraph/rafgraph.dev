import React from 'react';
import Footer from './Footer';

function Contact() {
  return (
    <div style={{ height: '100%', backgroundColor: 'inherit' }}>
      <div
        style={{
          minHeight: '100%',
          backgroundColor: 'inherit',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '25px 3vw 50px 3vw',
          }}
        >
          <img
            style={{ width: '280px', height: '280px', borderRadius: '7px' }}
            src="/imgs/rafael_pedicini-280.jpg"
            srcSet="/imgs/rafael_pedicini-560.jpg 2x"
            alt="Rafael Pedicini"
          />
          <div style={{ margin: '7px 0 0 2px' }}>
            <h1 style={{ fontSize: '24px' }}>Rafael Pedicini</h1>
            <ul>
              <li>San Francisco, CA</li>
              <li>(857) 498 - 0011</li>
              <li><a href="mailto:rafael@rafrex.com">rafael@rafrex.com</a></li>
              <li>
                <a href="https://github.com/rafrex" target="_blank">GitHub</a>
                {' '} - {' '}
                <a href="https://www.linkedin.com/in/rpedicini" target="_blank">LinkedIn</a>
                {' '} - {' '}
                <a href="https://twitter.com/rafrrex" target="_blank">Twitter</a>
              </li>
              <li>
                <a href="https://medium.com/@rafrex" target="_blank">Medium</a>
                {' '} - {' '}
                <a href="https://www.facebook.com/rpedicini" target="_blank">Facebook</a>
                {' '} - {' '}
                <a href="https://www.instagram.com/rafrex/" target="_blank">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
