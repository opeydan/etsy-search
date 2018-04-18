import React, { Component } from 'react';

export default class SearchBar extends Component {
		constructor(props) {
	    	super(props);

	    	this.state = {
	    		searchTerms: ''
	    	}

	    	this.handleChange = this.handleChange.bind(this);
    		this.createSearch = this.createSearch.bind(this);
	    }

	    // watches the change in the input field
	    handleChange = event => {
		    this.setState({
		      searchTerms: event.target.value,
		    });
		}
		// sends the search terms to the parent component (App.js) 
		createSearch() {
			const {searchTerms} = this.state;
	    	if (searchTerms) {
	    		const terms = searchTerms
	    		this.setState({
	    			searchTerms: ''
	    		})
	    		this.props.sendSearchToParent(terms);
	    	}
	  	}

		render() {
    		return (
    			<div className="SearchBar">
    				<input type="text" ref="query" placeholder="Lets Search!" onChange={this.handleChange} />
    				<input type="submit" onClick={this.createSearch} />
    			</div>
    		)
    	}
}