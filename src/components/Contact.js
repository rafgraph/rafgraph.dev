import React from 'react';
import Footer from './Footer';
import InteractiveLink from './InteractiveLink';
import Li from './Li';

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
              <Li>San Francisco, CA</Li>
              <Li>(857) 498 - 0011</Li>
              <Li><InteractiveLink href="mailto:rafael@rafrex.com" newWindow={false}>rafael@rafrex.com</InteractiveLink></Li>
              <Li>
                <InteractiveLink href="https://github.com/rafrex">GitHub</InteractiveLink>
                {' '} - {' '}
                <InteractiveLink href="https://www.linkedin.com/in/rpedicini">LinkedIn</InteractiveLink>
                {' '} - {' '}
                <InteractiveLink href="https://twitter.com/rafgraph">Twitter</InteractiveLink>
              </Li>
              <Li>
                <InteractiveLink href="https://medium.com/@rafgraph">Medium</InteractiveLink>
                {' '} - {' '}
                <InteractiveLink href="https://www.facebook.com/rpedicini">Facebook</InteractiveLink>
                {' '} - {' '}
                <InteractiveLink href="https://www.instagram.com/rafgraph/">Instagram</InteractiveLink>
              </Li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
