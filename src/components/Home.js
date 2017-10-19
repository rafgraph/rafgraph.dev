import React from 'react';
import NavItem from './NavItem';

export default class Home extends React.Component {
  static updateDocTitle() {
    document.title = 'Rafael Pedicini';
    document.querySelector('meta[name=description]').content =
      'Rafael Pedicini - Code, Photography, Contact';
  }

  componentDidMount() {
    Home.updateDocTitle();
  }

  render() {
    return (
      <nav style={{ height: '100%', fontSize: '15vmin' }}>
        <div style={{ height: '33%' }}>
          <NavItem
            to="/code"
            backgroundColor="#E0E0E0"
            focusBackgroundColor="rgba(0, 168, 0, 0.2)"
          >
            Code
          </NavItem>
        </div>
        <div style={{ height: '33%' }}>
          <NavItem
            href="http://rafael.photo"
            backgroundColor="#D0D0D0"
            focusBackgroundColor="rgba(0, 168, 0, 0.3)"
          >
            Photography
          </NavItem>
        </div>
        <div style={{ height: '34%' }}>
          <NavItem
            to="/contact"
            backgroundColor="#C0C0C0"
            focusBackgroundColor="rgba(0, 168, 0, 0.4)"
          >
            Contact
          </NavItem>
        </div>
      </nav>
    );
  }
}
