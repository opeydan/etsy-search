import React, { Component } from 'react';
import TextTruncate from 'react-text-truncate'; 

export default class ResultEl extends Component {

		render() {
    		return (
    			<li className="ResultEl">
    				<img src={this.props.element.Images[0].url_170x135} alt="" />
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