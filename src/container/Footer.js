import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer data-selected={window.location.hash.split("#").join("").split("/")[1]}>
        <section>
          <section>  
            <a href="https://www.linkedin.com/in/kohei-shingai-6a414a89/" target="_blank" rel="noopener noreferrer">
              <div className="links">
                <ul>
                  <li>
                    <svg id="social-linkedin" viewBox="0 0 18 18" width="100%" height="100%">
                      <path d="M15.4,1.5H2.6C2,1.5,1.5,2,1.5,2.6v12.8c0,0.6,0.5,1.1,1.1,1.1h12.8c0.6,0,1.1-0.5,1.1-1.1V2.6C16.5,2,16,1.5,15.4,1.5z M3.8,7.1H6v7.2H3.8V7.1z M4.9,6.1c-0.7,0-1.3-0.6-1.3-1.3c0-0.7,0.6-1.3,1.3-1.3c0.7,0,1.3,0.6,1.3,1.3C6.2,5.6,5.6,6.1,4.9,6.1z M14.5,14.3h-2.3v-3.5c0-0.8,0-1.9-1.2-1.9c-1.2,0-1.4,0.9-1.4,1.8v3.5H7.4V7.1h2.2v1h0c0.3-0.6,1-1.2,2.1-1.2 c2.3,0,2.7,1.5,2.7,3.4V14.3z"></path>
                    </svg>
                  </li>
                </ul>
              </div>
            </a>
          </section>
        </section>
      </footer>
    );
  }
}

export default Footer;