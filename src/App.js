import React, { Component } from 'react';
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Paginator from "./components/Paginator";
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      results: [],
      isLoading: false,  // TODO implement the visual loading indicator
      terms:[],
      totalElemets: 1,
      totalPages:1,
      currentPage: 1,
      favList: []
    };

    this.getApi = this.getApi.bind(this);
  }

  //API request as promise with search parameters and page number

  getApi(){

    this.setState({ isLoading: true });

    let api_key = "2783xml06xku4n47xxr9paqz";
    let terms = this.state.terms;
    let page = this.state.currentPage;
    let api = `https://openapi.etsy.com/v2/listings/active?keywords=${terms}&page=${page}&includes=Images:1&api_key=${api_key}`
  
    fetch(api)
        .then((response) => {
          if(!response.ok) throw new Error("Not OK", response.status);
          else return response.json();
        })
        .then((data) => {
          this.setState({ 
            isLoading: false, 
            results: data.results,
            totalElemets: data.count,
            totalPages: Math.ceil(data.count / 12),
            favList: []
          });
          console.log("DATA CAME", api);
        })
        .catch((error) => {
          console.log("error catched: " + error);
        });
  }

  // calling the API once the terms are received from the child compponent SearchBar
  getSearch = s => {
     
      const {terms} = this.state;
      terms.push(s);
      this.setState({
        terms:terms
      });
      this.getApi()
    }

  // passes the list of bookmarked items' ids  
  saveFavList = el => {
      this.setState({
        favList:el
      });
  }

  // Pagination controls  
  previousPage = () => {
      this.setState((prevState) => ({currentPage: (prevState.currentPage - 1)}), () => {
          this.getApi()
      });
  }

  nextPage = () => {
      this.setState((prevState) => ({currentPage: (prevState.currentPage + 1)}), () => {
          this.getApi()
      });
  }


  render() {

    return (
      <div className="App">
        <h2> The Etsy Search </h2>
        <SearchBar search={this.search} sendSearchToParent={this.getSearch}/>
        <SearchResults 
            results={this.state.results} 
            favList={this.state.favList} 
            sendFavListToParent={this.saveFavList}/>
        
        { this.state.totalPages > 1 ? ( <Paginator  
                                          all={this.state.totalElemets} 
                                          sendPrev={this.previousPage} 
                                          sendNext={this.nextPage}
                                          curPage={this.state.currentPage} /> ) : null }
      </div>
    );
  }
}

export default App;
