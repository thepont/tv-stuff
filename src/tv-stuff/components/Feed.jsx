/* @flow */

import React from 'react';
import {
    Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit,
    Heading, Image, Layout, ListItem, List, Quote, Slide, Text
  } from 'spectacle'; 
// import RssQuery from 'tv-stuff/entity/RssQuery';
import {Provider} from 'react-redux';
import styled from 'styled-components';

const PaperHeading = styled(Heading)`
  font-family: "Cormorant SC" !important;
  color: #FDFDFD !important;
  text-shadow: -1.1px 0 gray, 0 1.1px gray, 1.1px 0 gray, 0 -1.1px gray;
}`;

const ArticleHeading = styled(Heading)`
  font-family: "Cormorant SC" !important;
  font-size: 1.3em !important;
  color: #D3D3D3 !important;
}`;

const ArticleText = styled(Text)`
  font-family: "Goudy Bookletter 1911" !important;
  font-size: 1em !important;
  color: #D3D3D3 !important;
}`;

export function RssEntry(props): React.Element<any> {
    return (
        <div className="newsItem">
            <ArticleHeading>{props.title}</ArticleHeading>
            <hr/>
            <ArticleText>{props.contentSnippet}</ArticleText>
        </div>
    );
}

class Feed extends React.Component {
    props: {
        rss: {}
    };
    render(): React.Element<any> {
            return <Slide className="news">
                <PaperHeading className="news">{this.props.rss.title}</PaperHeading>
                
                {this.props.rss.entries.map(ii => RssEntry(ii))}
            </Slide>;
    }
}

export default Feed;
// const withData = CoreQueryHock(props => {
//     return {
//         url: 'http://www.theage.com.au/rssheadlines/top.xml',
//     };
// }, ['feedUrl']);

// export default withData(Feed);

