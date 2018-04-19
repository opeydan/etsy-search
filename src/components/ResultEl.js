import React, { Component } from 'react';
import TextTruncate from 'react-text-truncate'; 

export default class ResultEl extends Component {

		constructor(props) {
	        super(props);

	        this.state = {
	            selected: this.props.favEl
	        }
	    }

	    // switches the selected state and sends data to parent to form array of bookmarked items
	    handleFav = event => {
	    	let selected = !this.state.selected
	    		this.setState({
	    			selected: selected
	    		})
	    		this.props.sendFavToParent(event.target.id);
	    	
		}

		render() {
    		return (
    			<li className="ResultEl">
    				<div className="prodPic">
	    				<img src={this.props.element.Images[0].url_170x135} alt="" />
	    				<div 	
	    					className={this.state.selected === false ? "fav hidden": "fav shown"} 
	    					id={this.props.element.listing_id} 
	    					onClick={this.handleFav}> + 
	    				</div>
	    			</div>

    				<a className="elTitle" href={this.props.element.url} target="_blank">
	    				<TextTruncate
						    line={1}
						    truncateText="…"
						    text={this.props.element.title}
						/>
					</a>
 					<p className="price">${this.props.element.price}</p>	
    			</li>
    		)
    	}
}