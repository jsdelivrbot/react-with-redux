// Create a new component. This component
//should produce some HTML

//ES6 supports javascripts modules
//That means that we can reference other files
//in order to execute the code they contain
//In our case react is installed in the node_modules
import React, { Component } from 'react';
//React is diverged into two parts
//React knows how to nest elements together
//ReactDom knows how to render components in the DOM
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

//key for youtube
const API_KEY = 'AIzaSyDaug8_BB9MD2cez6G-zTvwbsGqqtgTITQ';
//const is like declaring a variable that
//will not change



//arrow is another symbol for function
class App extends Component { //This is a class of component, not an instance

  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

      this.videoSearch('surfboards');

  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }

  //this syntax is jsx - a dialect of js
  //webpack and bable will transpile it into core javascript
  //jsx cannot interpreted by browser
  //in order to see transpiled code go to www.babel.io
};

ReactDOM.render(<App />, document.querySelector('.container')); //we need to reneder instance of components, not classes
                          //the tag <App /> creates an instance of the class App
                          //second argument defines the target container

//Take this component's generated HTML
//and put it on the page (in the DOM)
