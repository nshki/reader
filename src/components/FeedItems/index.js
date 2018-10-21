import React from 'react';
import { connect } from 'redux-zero/react';
import actions from '../../actions';
import FeedItem from '../FeedItem';
import { Source, SourceText, Container, Items, Item, Text } from './style';

class FeedItems extends React.Component {
  render() {
    const { feedUrls, feedItems, pathname } = this.props;
    let feedSource = '';
    let filteredItems = feedItems;
    if (pathname.match(/^\/source\/\d+$/g)) {
      const splitPath = pathname.split('/source/');
      const sourceNum = parseInt(splitPath[splitPath.length - 1], 10);
      if (feedUrls[sourceNum]) {
        feedSource = feedUrls[sourceNum];
        filteredItems = feedItems.filter((item) => item.source === feedSource);
      }
    }

    return (
      <>
        {feedSource &&
          <Source>
            <Container>
              <SourceText>
                Source: {feedSource}
              </SourceText>
            </Container>
          </Source>
        }
        {filteredItems.length > 0 &&
          <Container>
            <Items>
              {filteredItems.map((feedItem, i) => (
                <Item key={`feed-item-${i}`}>
                  <FeedItem
                    title={feedItem.title}
                    url={feedItem.link}
                    date={feedItem.date}
                  />
                </Item>
              ))}
            </Items>
          </Container>
        }
        {filteredItems.length === 0 &&
          <Container>
            <Text>
              No news here! Try adding some sources above.
            </Text>
          </Container>
        }
      </>
    );
  }
}

const mapToProps = ({ feedUrls, feedItems }) => ({ feedUrls, feedItems });

export default connect(mapToProps, actions)(FeedItems);
