//search-bar component

import React, {Component} from 'react';
//the same as const Component = React.Component

//const SearchBar = () => {
//  return <input/> //React.createElement
//}; //it is a functional component. There is also a class component


//We will declare a class component. Class components are used
//when we need to check for the state of a component


//Each class based component has its own 'state' property
//When state changes, the component automatically re-renders
//All of its children re-render too
class SearchBar extends Component {
  constructor(props){
    super(props); //calls the constructor of the extended function(Component)

    this.state = {term: ''};//initialize state propeerty.
    //State can contain multiple properties.
    //Here we care about the term the user endered
  }

  render(){ //method so it can renders itself. it is still a function despite the syntax
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}/>

      </div>
    );
    //onChange is an out of the box event. It is a default react property.
    //setState changes the state of the instance of a class
    //Whenever we reference a javascript variable, we wrap it around {}
  };


  onInputChange(term) {
      this.setState({term});
      this.props.onSearchTermChange(term);
  };

}
  //onInputChange(event) { //We define an event handler
//    //we use the event input to access the value of the input
//    console.log(event.target.value);
//  }
//}

//export my code for use in other files
export default SearchBar;
