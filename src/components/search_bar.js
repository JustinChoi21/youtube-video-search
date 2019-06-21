import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {term : ''};
    }

    render() {
        return (
            <div className="search-bar">
                <input onChange={e => this.onSearchChange(e.target.value)}/>
                <p>This is test : {this.state.term}</p>
            </div>
        );
    }

    onSearchChange(term) {
        this.setState({term : term});
        this.props.onSearchChange(term);
    }
}

export default SearchBar;