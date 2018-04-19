import React, { Component } from 'react';
import ResultEl from "./ResultEl";

export default class SearchResults extends Component {

		constructor(props) {
	        super(props);

	        this.state = {
	            favList: this.props.favList
	        };
	    }

	 	// keeps track of bookmarked items by updating the corresponding array, sends the updated array all the way to the main scope
	 	addToFav = f => {
	    	const {favList} = this.state;
	    	let index = favList.indexOf(f);
	    	(index === -1) ? favList.push(f) : favList.splice(index, 1);

		    this.setState({
		      favList: favList,
		    });
		    this.props.sendFavListToParent(favList)
		}


		render() {
    		return (
    			<ul className="SearchResults">
    				{this.props.results.map((res) => {
				    	return (
    						<ResultEl 	
    							key={res.listing_id} 
    							element={res} 
    							favEl={this.state.favList.indexOf(res.listing_id.toString()) === -1 ? false : true}
    							sendFavToParent={this.addToFav}
    						/>
    					)
    				})}
    			</ul>
    		)
    	}
}