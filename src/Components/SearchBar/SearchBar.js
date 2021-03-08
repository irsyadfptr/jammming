import React from 'react'
import './SearchBar.css'

export default class SearchBar extends React.Component {
    
    constructor (props){
        super(props);

        //Empty state , changing value in searchbar
        this.state= {
            term: ''
        };

        this.handleTermChange = this.handleTermChange.bind(this);
        this.search= this.search.bind(this);
    }

    //Edit state value
    handleTermChange(event) {
        this.setState({term: event.target.value})
    }

    search() {
        this.props.onSearch(this.state.term);
    }

    
    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist"
                onChange={this.handleTermChange} />
                <button className="SearchButton" onClick={this.search}>SEARCH</button>
            </div>
        )
    }
}
