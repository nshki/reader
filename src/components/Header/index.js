import React from 'react';
import { connect } from 'redux-zero/react';
import actions from '../../actions';
import { FeedAdder, ProgressBar } from '../../components';
import { getLocalStorage } from '../../helpers';
import {
  Container,
  Flex,
  Logo,
  Nav,
  NavItems,
  NavItem,
  NavLink,
  ProgressContainer,
} from './style';
import { ReactComponent as LogoSVG } from './logo.svg';

class Header extends React.Component {
  componentDidMount() {
    const { restoreState, fetchFeedItems, updateLoadProgress } = this.props;
    const savedState = getLocalStorage();

    if (savedState && typeof savedState === 'object') {
      restoreState(savedState);
      fetchFeedItems(updateLoadProgress);
    }
  }

  render() {
    const { loadProgress } = this.props;

    return (
      <Container>
        <Flex>
          <Logo>
            <LogoSVG />
            Reader
          </Logo>

          <Nav>
            <NavItems>
              <NavItem>
                <NavLink to="/">Feed</NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/manage">Sources</NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/import">Import</NavLink>
              </NavItem>
            </NavItems>
          </Nav>
        </Flex>

        <FeedAdder />

        <ProgressContainer>
          <ProgressBar progress={loadProgress} />
        </ProgressContainer>
      </Container>
    );
  }
}

const mapToProps = ({
  loadProgress,
  restoreState,
  fetchFeedItems,
  updateLoadProgress,
}) => ({
  loadProgress,
  restoreState,
  fetchFeedItems,
  updateLoadProgress,
});

export default connect(mapToProps, actions)(Header);
