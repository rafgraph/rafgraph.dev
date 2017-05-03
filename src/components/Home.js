import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import NavItem from './NavItem';

export default class Home extends React.Component {
  state = {
    photoText: 'Photography',
  };

  handlePhotoClick = () => {
    if (this.state.photoText === 'Photography') {
      this.setState(
        { photoText: 'Coming Soon...' },
        () => (setTimeout(() => {
          this.setState({ photoText: 'Photography' });
        }, 1700)),
      );
    }
  }

  render() {
    return (
      <nav style={{ height: '100%', fontSize: '15vmin' }}>
        <div style={{ height: '33%' }}>
          <NavItem
            to="/code"
            backgroundColor="#E0E0E0"
            focusBackgroundColor="rgba(0, 168, 0, 0.2)"
          >Code</NavItem>
        </div>
        <div style={{ height: '33%' }}>
          <NavItem
            to="/"
            onClick={this.handlePhotoClick}
            backgroundColor="#D0D0D0"
            focusBackgroundColor="rgba(0, 168, 0, 0.3)"
          >
            <CSSTransitionGroup
              transitionName="coming-soon"
              transitionEnterTimeout={0}
              transitionLeaveTimeout={0}
            >
              <span
                key={this.state.photoText}
                style={{
                  position: 'absolute',
                  width: '100%',
                  textAlign: 'center',
                  WebkitTransform: 'translate(-50%, -50%)',
                  MozTransfor: 'translate(-50%, -50%)',
                  OTransform: 'translate(-50%, -50%)',
                  msTransform: 'translate(-50%, -50%)',
                  transform: 'translate(-50%, -50%)',
                }}
              >{this.state.photoText}</span>
            </CSSTransitionGroup>
          </NavItem>
        </div>
        <div style={{ height: '34%' }}>
          <NavItem
            to="/contact"
            backgroundColor="#C0C0C0"
            focusBackgroundColor="rgba(0, 168, 0, 0.4)"
          >Contact</NavItem>
        </div>
      </nav>
    );
  }
}
