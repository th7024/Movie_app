import React from 'react';
<<<<<<< HEAD
import axios from 'axios';
=======
>>>>>>> b047496b8937291ec4db0875937f7f63aa5d5b90

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
<<<<<<< HEAD
  getMovies = async() => { //async : axios가 끝날 떄 까지 기다려라고 자바스크립트한테 말해줌
    //awiat는 async를 선언해야 사용할 수 있음.
    const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
    //axios : fetch 위에 있는 작은 레이어
  }
  componentDidMount(){
    this.getMovies();
=======
  componentDidMount(){
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 6000);
>>>>>>> b047496b8937291ec4db0875937f7f63aa5d5b90
  }
  render(){
    const {isLoading} = this.state;
    return <div>{isLoading ? "Loading": "We are ready"}</div>
     
  }

}

export default App;
