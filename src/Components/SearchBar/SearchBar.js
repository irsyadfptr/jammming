import React from 'react'
import './SearchBar.css'

export default class SearchBar extends React.Component {
    
    constructor (props){
        super(props);

        //Empty state , changing value in searchbar
        this.state= {
            term: ''
        }

        this.search= this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }


    search() {
        this.props.onSearch(this.state.term);
    }

    //Edit state value
    handleTermChange(event) {
        this.setState({term: event.target.value})
    }
    
    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist"
                onChange={this.handleTermChange} />
                <button className="SearchButton">SEARCH</button>
            </div>
        )
    }
}
