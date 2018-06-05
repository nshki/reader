import React from 'react';
import './style.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <a
            className="footer__link"
            href="https://github.com/nshki/reader"
            aria-label="View on GitHub"
          >
            View on GitHub
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
