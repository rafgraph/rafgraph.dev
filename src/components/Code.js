import React from 'react';
import Footer from './Footer';
import * as codeProjects from '../content/codeProjects';

function Code() {
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
            {codeProjects.projectList.map((proj, idx1) => (

              <li key={idx1}>
                {codeProjects[proj].project.map((item, idx2, array) => (
                  <span key={idx2}>
                    {item.link ?
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        {item.title}
                      </a>
                      :
                      item.title
                    }
                    {(idx2 + 1) < array.length && <span> &nbsp;&ndash;&nbsp; </span>}
                  </span>
                ))}
                <span style={{ color: '#A0A0A0' }}>
                  {' '}&nbsp;...&nbsp; {codeProjects[proj].notes}
                </span>
              </li>

            ))}
          </ul>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Code;
