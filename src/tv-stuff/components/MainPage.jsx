/* @flow */

import React from 'react';
import {
    Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit,
    Heading, Image, Layout, ListItem, List, Quote, Slide, Text
  } from 'spectacle';
import createTheme from "spectacle/lib/themes/default";

import NowPlaying from 'tv-stuff/components/NowPlaying';
import Feed from 'tv-stuff/components/Feed';

import file from 'tv-stuff/assets/15.png';
const theme = createTheme({
    primary: '#282828',
    secondary: '#989898',
    tertiary: '#ACACAC',
    quaternary: '#FEFEFE'
  }, {
    primary: { name: "Fascinate Inline", googleFont: true, styles: [ "400", "700i" ] }
  });

const mockFeed = {
    feedUrl: 'test',
    title: 'The Age',
    entries: [{
        title: 'News Corp accused of colluding with NT government to monitor reporter',
        contentSnippet: "The NT News' top brass have been accused of striking a deal with the territory government to monitor emails sent by its then political reporter due to concerns his 'negative' reporting of the government's activities could cost the paper advertising revenue."
    },
    {
        title: 'Prisoner charged over attack on Aaron Pajich murderer Trudi Lenon',
        contentSnippet: "Lenon, who is in custody at Bandyup Women's Prison awaiting sentencing for the murder of Aaron Pajich, was attacked by the prisoner on New Year's Day."
    }
    ]
}

class MainPage extends React.Component {
    render(): React.Element<any> {
        return <Feed rss={mockFeed}/>
    }
    // render(): React.Element<any> {
    //     return (<Deck theme={theme} transition={['fade']} progress="none" >
    //     {/* // autoplay="false" autoplayDuration={5000}> */}
    //     {/* <Slide>
    //       <div>
    //       <Heading>In Other News</Heading>
    //       </div>
    //     </Slide> */}
    //     {/* <Slide><Feed rss={mockFeed}/></Slide> */}
    //     {/* <Slide><NowPlaying/></Slide> */}
    //   </Deck>)

}


export default MainPage;
