import React from 'react';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoText: 'Photography',
    };
    this.handlePhotoClick = this.handlePhotoClick.bind(this);
  }

  handlePhotoClick() {
    if (this.state.photoText === 'Photography') {
      this.setState(
        { photoText: 'Coming Soon...' },
        () => (setTimeout(() => {
          this.setState({ photoText: 'Photography' });
        }, 1700))
      );
    }
  }

  render() {
    return (
      <nav style={{ height: '100%', fontSize: '15vmin', letterSpacing: '0.025em' }}>
        <div style={{ height: '33%' }}><Link
          to="/code" id="code"
          style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            height: '100%',
            backgroundColor: '#E0E0E0',
          }}
        >
          Code
        </Link></div>
        <div style={{ height: '33%' }}><Link
          to="/" id="photography" onClick={this.handlePhotoClick}
          style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            height: '100%',
            backgroundColor: '#D0D0D0',
          }}
        >
          <ReactCSSTransitionGroup
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
          </ReactCSSTransitionGroup>
        </Link></div>
        <div style={{ height: '34%' }}><Link
          to="/contact" id="contact"
          style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            height: '100%',
            backgroundColor: '#C0C0C0',
          }}
        >
          Contact
        </Link></div>
      </nav>
    );
  }
}

export default Home;
