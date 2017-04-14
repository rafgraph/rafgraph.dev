import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.element.isRequired,
};

function App({ children }) {
  return (
    <div
      style={{
        height: '100%',
        fontFamily: 'helvetica, sans-serif',
        backgroundColor: '#F0F0F0',
        fontWeight: '300',
        fontSize: '16px',
      }}
    >
      {children}
    </div>
  );
}

App.propTypes = propTypes;

export default App;
