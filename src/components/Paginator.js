import React, { Component } from 'react';

export default class Paginator extends Component {
        previousPage = () => {
            if (this.props.curPage !== 1) {
              this.props.sendPrev();
            }
        }

        nextPage = () => {
            if (this.props.curPage + 1 < this.props.all) {
                this.props.sendNext();
            }
        }

		render() {
    		return (
    			<div className="pagination">
                    <button onClick={this.previousPage}>Previous Page</button>
                    <button>{this.props.curPage}</button>
                    <button onClick={this.nextPage}>Next Page</button>
                    <p className="totalEl">{this.props.all} Results</p>
                </div>
    		)
    	}
}