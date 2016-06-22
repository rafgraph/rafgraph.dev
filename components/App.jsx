import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.element.isRequired,
};

function App({ children }) {
  return (
    <div
      style={{
        height: '100%',
        fontFamily: 'helvetica neue, helvetica, sans-serif',
        backgroundColor: '#F0F0F0',
        fontWeight: '300',
        fontSize: '16px',
        letterSpacing: '0.025em',
      }}
    >
      {children}
    </div>
  );
}

App.propTypes = propTypes;

export default App;
