import React, { Component } from 'react';
import ResultEl from "./ResultEl";

export default class SearchResults extends Component {

		render() {
    		return (
    			<ul className="SearchResults">
    				{this.props.results.map((res) => {
				    	return (
    						<ResultEl key={res.listing_id} element={res}/>
    					)
    				})}
    			</ul>
    		)
    	}
}