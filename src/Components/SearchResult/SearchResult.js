import React from 'react'
import Tracklist from '../Tracklist/Tracklist'
import './SearchResult.css'

export default class SearchResults extends React.Component {
    render() {
        return (
            <div className="SearchResults">
            <h2>Results</h2>
            {/* <!-- Add a TrackList component --> */}
            <Tracklist tracks={this.props.searchResult}
            onAdd={this.props.onAdd} isRemoval={false}/>
            </div>
        )
    }
}
