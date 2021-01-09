import React from 'react';
import propTypes from "prop-types";


class App extends React.Component{
  state = {
    count: 0
  };
  add =() => {
    this.setState(current => ({count: current.count + 1})); //setState를 호출할 때 마다 react는 새로운 state와 함께 render 함수를 호출한다.
  };
  minus =() => {
    this.setState(current => ({count: current.count - 1}));
  };
  render(){
    return (
    <div>
      <h1> The number is: {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
      </div>
      );
  }

}

export default App;
