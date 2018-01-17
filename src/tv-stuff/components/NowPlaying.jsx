import React from 'react';
import {
    Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit,
    Heading, Image, Layout, ListItem, List, Quote, Slide, Text
  } from 'spectacle'; 
// import RssQuery from 'tv-stuff/entity/RssQuery';
import {Provider} from 'react-redux';
import styled from 'styled-components';

const PlayingHeading = styled(Heading)`
  font-family: "Cormorant SC" !important;
  color: #F3F3F3 !important;
  text-shadow: -1.1px 0 gray, 0 1.1px gray, 1.1px 0 gray, 0 -1.1px gray;
}`;

const PlayingArtist = styled(Heading)`
  padding-bottom: 0.3em;
  font-family: "Cormorant SC" !important;
  font-size: 1.3em !important;
  color: #F3F3F3 !important;
}`;

const PlayingSong = styled(Text)`
  font-family: "Goudy Bookletter 1911" !important;
  font-size: 1em !important;
  color: #F3F3F3 !important;
}`;

const PlayingAlbum = styled(Text)`
  font-family: "Goudy Bookletter 1911" !important;
  font-size: 1em !important;
  color: #D3D3D3 !important;
}`;

var mockPlaying = {
    artist: "Radiohead",
    album: "In Rainbows",
    song: "Videotape",
    art: "https://img.discogs.com/GeeqOKer1pKZRefEhPgCuJifdZs=/fit-in/600x604/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-7759832-1448204699-6195.jpeg.jpg"
}

class NowPlaying extends React.Component {
    props: {
        rss: {}
    };
    render(): React.Element<any> {
            return <Slide>
                <img src={mockPlaying.art} className="albumArt"/>
                <div className="song">
                    <PlayingArtist>{mockPlaying.artist}</PlayingArtist>
                    <PlayingSong>{mockPlaying.song}</PlayingSong>
                    <PlayingAlbum>{mockPlaying.album}</PlayingAlbum>
                </div>
            </Slide>;
    }
}
export default  NowPlaying;