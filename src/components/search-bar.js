import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    placeholder="Search"
                    onChange={event => this.onInputChange(event.target.value)}
                    //onChange = {event => this.setState({term: event.target.value})}
                />
            </div>
        );
    }

    //term: event.target.value
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;