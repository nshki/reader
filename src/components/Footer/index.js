import React from 'react';
import { Container, Link } from './style';

class Footer extends React.Component {
  render() {
    return (
      <Container>
        <Link
          href="https://github.com/nshki/reader"
          aria-label="View on GitHub"
        >
          View on GitHub
        </Link>
      </Container>
    );
  }
}

export default Footer;
