import React from 'react';
import Footer from './Footer';
import InteractiveLink from './InteractiveLink';
import Li from './Li';
import * as codeProjects from '../content/codeProjects';

export default class Code extends React.Component {
  static updateDocTitle() {
    document.title = 'Code Projects by Rafael Pedicini';
    document.querySelector('meta[name=description]').content =
      'Code Projects by Rafael Pedicini';
  }

  state = {
    showContent: false,
  };

  componentDidMount() {
    // render content on next animation frame for improved perceived performance
    // have the component mount with blank screen instantaneously,
    // and then render content while showing blank screen,
    // instead of rendering content while showing previous screen,
    // which makes the site seem unresponsive to user input,
    // need the instantaneous change, even to blank screen, to be perceived as fast
    window.setTimeout(() => {
      this.setState({ showContent: true });
    }, 16);
    Code.updateDocTitle();
  }

  render() {
    if (this.state.showContent === false) return null;
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
          <div style={{ maxWidth: '600px', margin: '5vh 5vw 15vh 5vw' }}>

            <h1 style={{ fontSize: '32px' }}>Code</h1>

            <ul className="code-list">
              {codeProjects.projectList.map(proj => (
                <Li margin="15px 0" key={proj}>
                  {codeProjects[proj].project.map((item, idx2, array) => (
                    <span key={idx2}>
                      {item.link
                        ? <InteractiveLink href={item.link}>
                            {item.title}
                          </InteractiveLink>
                        : item.title}
                      {idx2 + 1 < array.length && <span> &nbsp;–&nbsp; </span>}
                    </span>
                  ))}
                  <span style={{ color: '#A0A0A0' }}>
                    {' '}&nbsp;...&nbsp; {codeProjects[proj].notes}
                  </span>
                </Li>
              ))}
            </ul>

          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
