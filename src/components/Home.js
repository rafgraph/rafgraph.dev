import React from 'react';
import { Link } from 'react-router-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Interactive from 'react-interactive';

class Home extends React.Component {
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
          <Interactive
            as={Link}
            to="/code"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              backgroundColor: '#E0E0E0',
            }}
            hover={{ color: 'rgb(0, 168, 0)' }}
            active="hover"
            focusFromTab={{ backgroundColor: 'rgba(0, 168, 0, .2)' }}
            touchActiveTapOnly
          >Code</Interactive>
        </div>
        <div style={{ height: '33%' }}>
          <Interactive
            as={Link}
            to="/"
            onClick={this.handlePhotoClick}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              backgroundColor: '#D0D0D0',
            }}
            hover={{ color: 'rgb(0, 168, 0)' }}
            active="hover"
            focusFromTab={{ backgroundColor: 'rgba(0, 168, 0, .3)' }}
            touchActiveTapOnly
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
              >
                {this.state.photoText}
              </span>
            </CSSTransitionGroup>
          </Interactive>
        </div>
        <div style={{ height: '34%' }}>
          <Interactive
            as={Link}
            to="/contact"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              backgroundColor: '#C0C0C0',
            }}
            hover={{ color: 'rgb(0, 168, 0)' }}
            active="hover"
            focusFromTab={{ backgroundColor: 'rgba(0, 168, 0, .4)' }}
            touchActiveTapOnly
          >Contact</Interactive>
        </div>
      </nav>
    );
  }
}

export default Home;
