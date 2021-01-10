import React from 'react';



class App extends React.Component{
  constructor(props){ //자바스크립트에서 class를 만들 때 호출되는 것, mounting안에 있는 것으로서 render보다 먼저 실행됨
    super(props);
console.log("내가 제일 빠름")
  }
  state = {
    count: 0
  };
  add =() => {
    this.setState(current => ({count: current.count + 1})); //setState를 호출할 때 마다 react는 새로운 state와 함께 render 함수를 호출한다.
  };
  minus =() => {
    this.setState(current => ({count: current.count - 1}));
  };
  componentDidMount(){ 
    console.log("랜더링됐다.")
  }
  componentDidUpdate(){//update는 react가 실행되는 것을 말함.버튼을 누르면 업데이트가 됨
    console.log("업데이트됨.")
  }
  componentWillUnmount(){
    console.log("나는 떠난다.") //컴포넌트가 떠날 때 호출 
  }
  render(){ //순서 : constructor - render - componentDidMount
    console.log("랜더링 중")
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
