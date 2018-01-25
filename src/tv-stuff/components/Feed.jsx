/* @flow */

import React from 'react';
import {
    Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit,
    Heading, Image, Layout, ListItem, List, Quote, Slide, Text
  } from 'spectacle';
// import styled from 'styled-components';
import {CoreQueryHock} from '../entity/EntityApi';

// const PaperHeading = styled(Heading)`
//   font-family: "Cormorant SC" !important;
//   color: #FDFDFD !important;
//   text-shadow: -1.1px 0 gray, 0 1.1px gray, 1.1px 0 gray, 0 -1.1px gray;
// }`;

// const ArticleHeading = styled(Heading)`
//   font-family: "Cormorant SC" !important;
//   font-size: 1.3em !important;
//   color: #D3D3D3 !important;
// }`;

// const ArticleText = styled(Text)`
//   font-family: "Goudy Bookletter 1911" !important;
//   font-size: 1em !important;
//   color: #D3D3D3 !important;
// }`;

// export function RssEntry(props): React.Element<any> {
//     return (
//         <div className="newsItem">
//             <ArticleHeading>{props.title}</ArticleHeading>
//             <hr/>
//             <ArticleText>{props.contentSnippet}</ArticleText>
//         </div>
//     );
// }


export function RssEntry(props): React.Element<any> {
    return (
        <div className="newsItem">
            <div>{props.title}</div>
            <hr/>
            <div>{props.contentSnippet}</div>
        </div>
    );
}

class Feed extends React.Component {
    props: {
        rss: {}
    };

    render(): React.Element<any> {
        console.log(this.props)

        return this.props
            .requestState
            .successMap(() => <div>done</div>)
            .errorMap((err) => <div>error, {err.message}</div>)
            .fetchingMap(() => <div>fetching</div>)
            .value()
        // return <div className="news">
        //     <div className="news">{this.props.rss.title}</div>

        //     {this.props.rss.entries.map(ii => RssEntry(ii))}
        // </div>;
    }
}
    // render(): React.Element<any> {
    //         return <Slide className="news">
    //             <PaperHeading className="news">{this.props.rss.title}</PaperHeading>

    //             {this.props.rss.entries.map(ii => RssEntry(ii))}
    //         </Slide>;
    // }
// }

// export default Feed;
const withData = CoreQueryHock(props => {
    console.log('Calling With Data...')
    return {
        url: 'http://www.theage.com.au/rssheadlines/top.xml',
        // url: 'https://www.reddit.com/.rss'
    };
}, []);

export default withData(Feed);


