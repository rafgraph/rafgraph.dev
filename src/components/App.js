import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Code from './Code';
import Contact from './Contact';

function App() {
  return (
    <div
      style={{
        height: '100%',
        fontFamily: 'helvetica, sans-serif',
        backgroundColor: '#F0F0F0',
        fontWeight: '300',
        fontSize: '16px',
        WebkitTextSizeAdjust: 'none',
        MozTextSizeAdjust: 'none',
        msTextSizeAdjust: 'none',
        textSizeAdjust: 'none',
      }}
    >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/code" component={Code} />
        <Route exact path="/contact" component={Contact} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </div>
  );
}

export default App;
