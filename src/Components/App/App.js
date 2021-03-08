import React from 'react'
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResult from '../SearchResult/SearchResult'
import Playlist from '../Playlist/Playlist'
import Spotify from '../../util/Spotify'

class App extends React.Component {
  constructor(props) {
    super(props);

    // This is state when API isn't available
    //   this.state = {
    //   searchResult: [
    //     {name: 'name1', artist: 'artist1', album: 'album1', id: 1},
    //     {name: 'name2', artist: 'artist2', album: 'album2', id: 2},
    //     {name: 'name3', artist: 'artist3', album: 'album3', id: 3}
    //   ],
    //   playlistNames: 'My Playlist',
    //   playlistTracks: [{name: 'PLname1', artist: 'PLartist1', album: 'PLalbum1', id: 4},
    //   {name: 'PLame2', artist: 'PLartist2', album: 'PLalbum2', id: 5}]
    // };

    this.state = {
      searchResult: [],
      playlistNames: 'My Playlist',
      playlistTracks: []
    }

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack= this.removeTrack.bind(this);
    this.updatePlaylistName= this.updatePlaylistName.bind(this);
    this.savePlaylist= this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  //SearchBar.js Props
  search(term) {
    Spotify.search(term).then(searchResult => {
      this.setState({searchResult: searchResult})
    })
  }
    
  //SearchResult.js Props
  addTrack(track) {
    let tracks= this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(track);
    this.setState({playlistTracks: tracks});
  }

  //Playlist.js Props
  removeTrack(track) {
    let tracks= this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

    this.setState({playlistTracks: tracks})
  }

  //Playlist.js Props
  updatePlaylistName(name) {
    this.setState({playlistNames: name})
  }

  //Playlist.js Props
  savePlaylist() {
    const trackUris = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistNames, trackUris).then(()=>{
      this.setState({
        playlistNames: 'New Playlist',
        playlistTracks: []
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          {/* <!-- Add a SearchBar component --> */}
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            {/* <!-- Add a SearchResults component --> */}
            <SearchResult searchResult={this.state.searchResult}
            onAdd={this.addTrack}/>
            {/* <!-- Add a Playlist component --> */}
            <Playlist playlistNames={this.state.playlistNames}
            playlistTracks={this.state.playlistTracks}
            onRemove={this.removeTrack}
            onNameChange={this.updatePlaylistName}
            onSave={this.savePlaylist}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
