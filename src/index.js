// Create a new component. This component
//should produce some HTML

//ES6 supports javascripts modules
//That means that we can reference other files
//in order to execute the code they contain
//In our case react is installed in the node_modules
import React from 'react';
//React is diverged into two parts
//React knows how to nest elements together
//ReactDom knows how to render components in the DOM
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'

//key for youtube
const API_KEY = 'AIzaSyAIhqy8YY1T6ZigO-RIqhc84ujFCjsHR1o';
//const is like declaring a variable that
//will not change

//arrow is another symbol for function
const App = () => { //This is a class of component, not an instance
  return (<div>
    <SearchBar />
  </div>
);

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
