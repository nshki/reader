import React from 'react';
import { connect } from 'redux-zero/react';
import actions from '../../actions';
import FeedSource from '../FeedSource';
import { Container, Items, Item, Text } from './style';

class FeedSources extends React.Component {
  render() {
    const { feedUrls, feedNames } = this.props;

    return (
      <>
        {feedUrls.length > 0 &&
          <Container>
            <Items>
              {feedUrls && feedUrls.map((feedUrl, i) => {
                const feedName = feedNames[feedUrl] || feedUrl;
                return (
                  <Item key={`feed-source-${i}`}>
                    <FeedSource name={feedName} sourceNum={i} />
                  </Item>
                );
              })}
            </Items>
          </Container>
        }
        {feedUrls.length === 0 &&
          <Container>
            <Text>
              No sources! Try adding some above.
            </Text>
          </Container>
        }
      </>
    );
  }
}

let mapToProps = ({ feedUrls, feedNames }) => ({ feedUrls, feedNames });

export default connect(mapToProps, actions)(FeedSources);
